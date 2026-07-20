import os
import wave
import struct
import numpy as np
from PIL import Image, ImageDraw, ImageFont
from gtts import gTTS
from moviepy import VideoFileClip, ImageClip, CompositeVideoClip, AudioFileClip, CompositeAudioClip

# Configuration
RECORDINGS_DIR = os.path.join(os.path.dirname(__file__), 'recordings')
INPUT_VIDEO = os.path.join(RECORDINGS_DIR, 'neurostack_walkthrough.webm')
OUTPUT_VIDEO = os.path.join(RECORDINGS_DIR, 'neurostack_viral_reel.mp4')
BG_MUSIC_PATH = os.path.join(RECORDINGS_DIR, 'synth_ambient.wav')

# Script timeline settings (Voiceovers & Captions)
SCENES = [
    {
        "id": 1,
        "text": "STOP MIXING THESE SUPPLEMENTS! ❌",
        "voiceover": "Stop wasting money on these supplement combinations.",
        "start": 0.5,
        "duration": 4.0,
        "color": (255, 60, 60) # Neon Red
    },
    {
        "id": 2,
        "text": "CAFFEINE + MELATONIN CONFLICT ⚠️",
        "voiceover": "Taking caffeine and melatonin together, or taking NMN before bed, completely ruins your biological clock.",
        "start": 4.5,
        "duration": 5.5,
        "color": (255, 158, 0) # Neon Orange
    },
    {
        "id": 3,
        "text": "ENERGY VS SLEEP CLASH 🧠",
        "voiceover": "Caffeine blocks melatonin, and NMN boosts cellular energy, meaning taking them at the wrong time is useless.",
        "start": 10.5,
        "duration": 5.0,
        "color": (157, 78, 221) # Neon Purple
    },
    {
        "id": 4,
        "text": "SCAN SYNERGIES FOR FREE 🔬",
        "voiceover": "I built a free tool that scans supplement conflicts using live PubMed clinical trials.",
        "start": 15.5,
        "duration": 5.0,
        "color": (0, 229, 255) # Neon Cyan
    },
    {
        "id": 5,
        "text": "NEURO-STACK // LINK IN BIO 🔗",
        "voiceover": "Go to the link in my bio and check if your daily supplement stack is actually safe.",
        "start": 20.5,
        "duration": 4.5,
        "color": (0, 255, 102) # Neon Green
    }
]

# 1. Synthesize background music (WAV) using pure math waves
def generate_ambient_synth(filename, duration=26, sr=44100):
    print("Synthesizing ambient synth pad track...")
    t = np.linspace(0, duration, int(sr * duration), endpoint=False)
    
    # Atmospheric synth: root chord of A2 (110Hz), E3 (164.8Hz), C#3 (138.6Hz)
    wave_data = 0.45 * np.sin(2 * np.pi * 110 * t)
    wave_data += 0.3 * np.sin(2 * np.pi * 138.6 * t)
    wave_data += 0.25 * np.sin(2 * np.pi * 164.8 * t)
    
    # Pulse LFO (slow breathing effect at 0.35 Hz)
    lfo = 0.5 * (1.1 + np.sin(2 * np.pi * 0.35 * t))
    wave_data = wave_data * lfo
    
    # Smooth fades
    fade_in = np.clip(t / 2.0, 0.0, 1.0)
    fade_out = np.clip((duration - t) / 2.0, 0.0, 1.0)
    wave_data = wave_data * fade_in * fade_out
    
    # Format to 16-bit PCM integer WAV data
    audio_ints = np.int16(wave_data * 32767)
    
    with wave.open(filename, 'w') as wav_file:
        wav_file.setparams((1, 2, sr, len(audio_ints), 'NONE', 'not compressed'))
        for val in audio_ints:
            wav_file.writeframes(struct.pack('<h', val))
    print(f"Ambient synth pad track saved at: {filename}")

# 2. Synthesize per-scene voiceovers using gTTS
def generate_voiceovers():
    print("Generating voiceover audio files using gTTS...")
    for scene in SCENES:
        vo_path = os.path.join(RECORDINGS_DIR, f"vo_{scene['id']}.mp3")
        print(f"Synthesizing Voiceover {scene['id']}: '{scene['voiceover']}'...")
        tts = gTTS(text=scene['voiceover'], lang='en', slow=False)
        tts.save(vo_path)
        scene["vo_file"] = vo_path

# 3. Render clean text labels to transparent PNG files using Pillow
def render_text_png(txt, color, width=500, height=100, font_size=20):
    # Dark semi-transparent card background behind text for contrast
    img = Image.new("RGBA", (width, height), (15, 17, 23, 230))
    draw = ImageDraw.Draw(img)
    
    # Try loading bold system font, otherwise default
    try:
        font = ImageFont.truetype(r"C:\Windows\Fonts\arialbd.ttf", font_size)
    except:
        font = ImageFont.load_default()
        
    # Get text dimensions and center it
    bbox = draw.textbbox((0, 0), txt, font=font)
    tw = bbox[2] - bbox[0]
    th = bbox[3] - bbox[1]
    
    x = (width - tw) / 2
    y = (height - th) / 2 - bbox[1]
    
    # Draw double border for high-end look
    draw.rounded_rectangle([(0, 0), (width, height)], radius=8, outline=color, width=2)
    
    draw.text((x, y), txt, font=font, fill=(*color, 255))
    
    temp_path = os.path.join(RECORDINGS_DIR, f"temp_label_{hash(txt)}.png")
    img.save(temp_path)
    return temp_path

# 4. Render and compile video using moviepy
def build_edited_video():
    print("Composing video clips, overlays, and audio tracks...")
    
    # Load raw screen recording
    video_clip = VideoFileClip(INPUT_VIDEO).without_audio()
    video_duration = video_clip.duration
    print(f"Loaded screen recording. Duration: {video_duration}s")
    
    # Generate matching synth music
    generate_ambient_synth(BG_MUSIC_PATH, duration=video_duration + 5)

    # Generate visual text clips
    text_clips = []
    temp_images = []
    
    for scene in SCENES:
        # Render label
        img_path = render_text_png(scene["text"], scene["color"])
        temp_images.append(img_path)
        
        # Load as moviepy ImageClip
        t_clip = (
            ImageClip(img_path)
            .with_duration(scene["duration"])
            .with_start(scene["start"])
            .with_position(("center", 780)) # Place near the bottom, overlaying the card content
        )
        text_clips.append(t_clip)

    # Compile Audio
    from moviepy.audio.fx import MultiplyVolume
    
    # Ambient Music (ducked at 18% volume)
    bg_music = AudioFileClip(BG_MUSIC_PATH).with_effects([
        MultiplyVolume(0.18)
    ]).with_duration(video_duration)
    
    audio_tracks = [bg_music]
    
    # Voiceovers (at 1.3x volume for clarity)
    for scene in SCENES:
        vo_audio = (
            AudioFileClip(scene["vo_file"])
            .with_effects([MultiplyVolume(1.3)])
            .with_start(scene["start"])
        )
        audio_tracks.append(vo_audio)

    composite_audio = CompositeAudioClip(audio_tracks)
    
    # Compose Video
    final_video = CompositeVideoClip(
        [video_clip] + text_clips,
        size=video_clip.size
    ).with_audio(composite_audio)

    # Write output file
    print("Rendering final video. This may take a moment...")
    final_video.write_videofile(
        OUTPUT_VIDEO,
        fps=30,
        codec="libx264",
        audio_codec="aac"
    )
    print(f"🎉 EDITED VIDEO SUCCESSFULLY CREATED: {OUTPUT_VIDEO}")
    
    # Cleanup temporary image files
    for img in temp_images:
        try:
            os.remove(img)
        except:
            pass

if __name__ == "__main__":
    try:
        if not os.path.exists(RECORDINGS_DIR):
            os.makedirs(RECORDINGS_DIR)
            
        generate_voiceovers()
        build_edited_video()
    except Exception as e:
        print(f"Error during video composition: {e}")
