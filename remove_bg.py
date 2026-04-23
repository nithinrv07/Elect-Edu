from PIL import Image, ImageDraw

def remove_background(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    
    # We flood fill transparent color starting from the 4 corners
    w, h = img.size
    white_trans = (255, 255, 255, 0)
    
    ImageDraw.floodfill(img, (0, 0), white_trans, thresh=15)
    ImageDraw.floodfill(img, (w-1, 0), white_trans, thresh=15)
    ImageDraw.floodfill(img, (0, h-1), white_trans, thresh=15)
    ImageDraw.floodfill(img, (w-1, h-1), white_trans, thresh=15)

    # Some edges may still have aliased borders. A quick pass is to alpha composite but floodfill usually covers it well locally.
    # To clean up minor white fringing around the dark logo edges, we can do a quick check:
    data = img.load()
    for y in range(h):
        for x in range(w):
            r, g, b, a = data[x, y]
            # If it's basically pure white and alpha is high, but we didn't hit it (e.g. enclosed or aliased),
            # we don't aggressively kill it unless we want to risk the flag middle.
            # We will just rely on the floodfill.
            pass

    img.save(output_path, "PNG")

remove_background("images.png", "transparent_logo.png")
