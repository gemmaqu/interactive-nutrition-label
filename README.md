# Interactive Nutrition Label

An FDA-style Nutrition Facts label with visual cues layered on top, so it's easier to see at a glance which nutrients are high or low in a serving. The label is rendered with the [Nutritionix nutrition-label](https://github.com/nutritionix/nutrition-label) jQuery plugin, and the interactions and charts are built with [D3 v7](https://d3js.org/).

## Features

- **Hover highlighting:** hovering over a label row highlights it in yellow.
- **Color-coded markers:** nutrients get a marker based on their % Daily Value: low is under 5%, high is over 20%, and medium is everything in between.
  - Red squares mark nutrients to limit (saturated fat, sodium, added sugars). Darker means more.
  - Green circles mark nutrients to get enough of (dietary fiber, vitamin D, calcium, iron, potassium). Darker means more.
- **Diverging bar chart:** "Limit These" and "Get Enough" nutrients on either side of a center line, using % Daily Value read from the rendered label.
- **Donut chart:** the % Daily Value of each nutrient as a share of the whole.
- **Adjustable serving size:** the plugin's arrows update the label's amounts for a different serving.

## Running it

The page has no build step, but it needs an internet connection to load jQuery and the label font. From the repo root, start a local server:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

To show a different food, edit the `value...` options at the top of `index.js`.

## Project structure

| Path | What it is |
| --- | --- |
| `index.html` | Page layout and script and stylesheet includes |
| `index.js` | Label setup, hover behavior, markers, and both charts |
| `style.css` | Highlight and marker colors |
| `d3.v7.min.js` | D3 library |
| `nutrition-label/` | Unmodified copy of the Nutritionix plugin ([MIT license](nutrition-label/LICENSE)) |
| `old_index.js`, `other_old_index.js`, `other_other_old_index.js` | Earlier versions of `index.js`, not loaded by the page |

## Known issues

- **Some values don't reach the label:** total carbohydrates, dietary fiber, sugars, and protein show as 0 even though `index.js` sets them. The option names may not match what the plugin expects.
- **Changing the serving size removes the markers:** the plugin redraws the label, which also drops the row IDs and hover highlighting that `index.js` added. The charts don't update either.
- **The dietary fiber marker is wrong:** it shows medium green at 0% Daily Value, because it reads the wrong part of that row.
- **The bar chart skips some nutrients:** dietary fiber and protein don't appear, and neither does trans fat.
- **The donut chart is hard-coded:** its numbers are typed into `index.js` rather than read from the label, so they can disagree. Vitamin D is 5% in the chart and 0% on the label.
- **Chart timing:** the bar chart is drawn after a fixed 500 ms delay.
