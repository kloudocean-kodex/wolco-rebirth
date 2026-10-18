# WOLCO demo visual assets

Created for the user's two WOLCO demo refinements on 18 October 2026. This directory is a shared handoff; each website should copy only the assets it consumes into its own public directory. Retain provenance records in each repository's documentation.

## Original identity

The original supplied WOLCO artwork is retained unchanged. `wolco-original-logo.webp` is a lossless web derivative of `wolco-original-logo.png`. Its decoded pixels were rechecked against the PNG in this session. Preserve its aspect ratio and small yellow element; do not redraw, recolour, stretch or crop the artwork.

`original-brand-assets.json` records exact original source URLs, hashes and byte sizes from the WOLCO source project. The live shared copies have matching SHA-256 hashes. `brand-lossless.json` records the original derivative evidence. The red logo is 606 x 286 pixels; size it proportionately.

## New generated images

Four fictional architectural images were created with the built-in `image_gen` tool. No third-party image-model fallback, new paid subscription or external API purchase was made. Full final prompts and original output paths are in `generation-prompts.json`; retained originals are in `originals/`; byte sizes, dimensions and hashes for every web derivative are in `asset-manifest.json`.

| Asset | Story role | Canonical dimensions |
| --- | --- | --- |
| `generated-exterior-dusk.webp` | Arrival: stone, garden, warm light | 1600 x 900 |
| `generated-materials.webp` | Touch: travertine, oak, bronze and linen | 1600 x 900 |
| `generated-kitchen.webp` | Gather: daily rituals and considered joinery | 1600 x 900 |
| `generated-living.webp` | Dwell: light, space and the garden | 1600 x 900 |

Every image has a 640 x 360 derivative (`-640.webp`) and a 960 x 540 derivative (`-960.webp`). The canonical filenames are the 1600-pixel files. Derivatives only resize and encode the generated original; they do not retouch, replace or fabricate real project photography.

These are fictional design visualisations. They are not completed WOLCO homes, actual WOLCO plans, products, inclusions or locations. Use a visible concise caption such as **Design visualisation** adjacent to every generated image or enclosing clearly labelled concept section. Alt text should describe the scene and may say 'design visualisation'. Keep genuine client project photography separately captioned with its verified source facts.

## Genuine generated video and final story

The signed-in Gemini web application completed a genuine exterior video using the generated dusk facade as reference. The Create video onboarding displayed **Gemini Omni**; no separate Veo model identity is assumed. The parent task downloaded `gemini_generated_video_6d44a9a9.mp4` on 18 October 2026. Its untouched source is retained at `originals/video/generated-exterior-film-source.mp4`; the source hash matches the download byte-for-byte.

`generated-exterior-film.mp4` is the silent web derivative: 10.00 seconds, 1280 x 720, 24fps, 240 frames, H.264, faststart, 3,667,150 bytes. `generated-exterior-film-poster.webp` comes from an actual frame of that video. Both source and derivative fully decode without errors. Four large representative frames and a 20-frame contact sheet were inspected: continuous lateral camera movement changes foreground/background parallax; the main facade, columns, glazing, steps and roofline remain coherent in the sampled frames. No visible model mark was apparent in those samples; the complete original frame is preserved without cropping, masking or watermark removal. This sampled inspection does not replace real browser playback QA.

`generated-exterior-film-provenance.json` records the exact submitted prompt, reference-image hash, source/output hashes, codec/duration/frame checks, processing and visual review. The prompt requested 8 seconds; the completed video contains 10 seconds of imagery. The same prompt is retained in `generated-exterior-film-prompt.txt`. This clip is a fictional architectural design visualisation, not a filmed WOLCO project. Use a concise visible caption such as **Architectural concept film. AI-generated design visualisation.**

A second genuine Gemini kitchen clip completed using `generated-kitchen.webp` as reference. Its untouched download is retained at `originals/video/generated-kitchen-film-source.mp4`; its silent web derivative is `generated-kitchen-film.mp4`. Exact prompt and reference/source/output hashes are in `generated-kitchen-film-provenance.json`. Both source and derivative fully decoded. Four large representative frames and a 20-frame contact sheet were inspected: the island, tap, three stools and cabinetry remain coherent while the camera, foliage and shadows move. The model uses wider framing than the reference rather than a pixel-identical opening. Its visible Gemini sparkle mark at lower right is preserved.

| Genuine video asset | Duration | Frames | Dimensions / rate | Silent web size |
| --- | --- | --- | --- | --- |
| `generated-exterior-film.mp4` | 10.00 seconds | 240 | 1280 x 720 / 24fps | 3,667,150 bytes |
| `generated-kitchen-film.mp4` | 10.00 seconds | 240 | 1280 x 720 / 24fps | 2,021,657 bytes |
| `generated-architectural-story.mp4` | 19.42 seconds | 466 | 1280 x 720 / 24fps | 5,773,660 bytes |

The final **Arrival -> Gather** story is `generated-architectural-story.mp4`, with `generated-architectural-story-poster.webp` and `generated-architectural-story-provenance.json`. It edits the TWO completed genuine video downloads directly, with one final H.264 encode and a restrained 0.5-second cross-dissolve. It contains no animated stills and no material/living footage. Its complete 466 frames decode without error, MP4 faststart is confirmed, no audio stream remains, and the 5.51MiB file is below the 25MiB asset target. A 12-frame sequence sheet plus five frames around the transition were inspected: clean exterior-to-kitchen dissolve, no black gap, coherent warm stone/oak/bronze palette, complete source frames and the kitchen's visible model mark retained. The poster is an actual frame, 1280 x 720, 169,856 bytes. Decode logs and visual sheets are in `qa/`.

After the kitchen completed, the parent task observed Gemini's video-generation quota limit and a displayed reset of 4:07 PM. No new purchase or subscription change was made. Materials and living remain generated stills, not completed video shots. The four-clip assembler and future prompts remain available for a later authorised run if completed additional clips become available. Do not describe the current story as four shots or claim all four scenes contain generated moving footage.

Use a concise visible caption such as **Architectural concept film. Design visualisations.** For a film dialog, use the actual-frame poster, native controls and `preload="none"`. Respect reduced motion and verify playback/keyboard focus in the actual website. A separate hero video, if used, needs an explicit pause control and a poster for reduced motion.

## Retained cinematic still motion study

`generated-motion-study.mp4` is a 24.96-second (approximately 25 seconds), 1600 x 900, 24fps H.264 MP4 with no audio. It uses gentle zooms and cross-dissolves through the new generated stills: Arrival, Touch, Gather, Dwell. It is a locally authored film from generated images, not newly synthesised moving 3D footage or a live filmed WOLCO project. `generated-motion-study-poster.webp` is the exterior study poster. Exact technique, encoding command, hashes and source sequence are in `motion-study-provenance.json`.

Required concise site caption: **Design visualisations. Motion study created from generated stills.** Provide native controls in a dialog or an explicit play/pause control. Respect reduced motion; use the poster until a visitor chooses playback. Avoid loading the MP4 as part of initial page load; `preload="none"` with the poster is appropriate for the film chapter.

The existing `Downloads/WOLCO_REAL_MEDIA_MOTION_STUDY_PRIVATE.mp4` was not used or republished by this asset work.

## Free availability check

OpenArt was checked live in this session: Free plan with 6 credits. No listed video mode was affordable; the cheapest default was PixVerse V6 at 50 credits. No OpenArt video generation, credit purchase, workspace change or subscription upgrade was submitted. Runway required reauthentication in the parent task. The retained still-based film uses the already-installed local FFmpeg; it must not be described as a Runway, Veo or other AI video-engine output. The later genuine exterior clip above was successfully generated through the user's already signed-in Gemini application; no new subscription or credit purchase was made by this asset work.

Do not treat a working MP4 or image URL as full site QA. The consuming websites still need desktop/mobile browser checks for crops, loading, captions, controls, keyboard focus and reduced motion.
