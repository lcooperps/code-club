# Code Club website

A simple, single-page site for Code Club. No build tools, no installs.

- `index.html` is the page and its design. You shouldn't need to touch it.
- `content.js` holds all the words. **This is the file you edit.**

## Put it online with GitHub Pages (about 5 minutes)

1. Sign in to GitHub and click **New repository**. Call it `code-club`, set it to **Public**, and create it.
2. Click **uploading an existing file**, drag in `index.html`, `content.js` and `README.md`, then click **Commit changes**.
3. Go to **Settings**, then **Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and click **Save**.
4. After a minute or two the address appears at the top of that page, something like `https://yourname.github.io/code-club/`.

Check it on a student login in school, in case the filter needs the address allowing.

## Update it

Open `content.js` on GitHub, click the pencil icon, make your change, and click **Commit changes**. The live site updates within a couple of minutes.

- **News:** add a line at the top of `news`, e.g.
  `{ date: "2026-12-07", text: "Show and tell this Monday!" },`
- **Showcase:** add an entry to `showcase`. Use first names or initials only (and check your school's policy before linking to student work).
  `{ title: "Space Dodger", by: "A, Y8", flavour: "games", link: "https://...", note: "Dodge asteroids for 30 seconds." },`
- **Challenges:** add to `challenges`. `due` can be a date or `""`.
- **New session:** add to `sessions`.
- **Two tabs:** each flavour has `level: "ks3"` (Years 7 to 9) or `level: "ks45"` (Years 10 to 13), which decides its tab. Tab names and intro text are in `levels`.
- **Starter code:** add `code: "..."` to a flavour and it appears in a box with a Copy button.
- **Swap a flavour:** copy a whole `{ ... }` block in `flavours`, give it a new `id` and a new `colour`, and change the text. Colours match the printed cards. Steps and ideas can use `<b>bold</b>` and `<code>code</code>`.

If the page goes blank after an edit, it's almost always a missing comma or quote mark. Use the **History** button on GitHub to see your last change, or undo it.

## Handy links

Each flavour has its own link, e.g. `.../code-club/#games` opens the Games card directly, and `.../code-club/#ks45` opens the Years 10 to 13 tab. Good for QR codes on posters and the start slides.
