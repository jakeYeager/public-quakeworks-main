---
lang: en-US
title: Almanac FAQ
description: Information resource for the Earth-tide almanacs.
---

# Almanac FAQ

The Earth-tide almanac is designed to show earthquake occurrences through time. Historical earthquake activity is plotted in simple visualizations to show when events occurred relative to the Earth’s orbit around the Sun. These visualizations help illustrate that not only is the Earth’s orbit locked in the Sun’s gravity, but also the shape of the Earth is slightly contorted throughout the year. In turn this contortion effects the brittle surface, or crust of the Earth. Using earthquake activity as an indicator, the  visualizations can offer a perspective of when the crust compresses and relaxes.

## Visualization Setup

To better understand these visualizations, here are a few essential things to know:

### Marker Calendar

To be as exact as possible in tracking historical activity, a custom calendaring system was created to place events in time. This custom calendar essentially divides the year into sixteen parts rather than the common twelve months of the civil or Gregorian calendar. This customized calendar is referred to here as the “marker” calendar. Here are the benefits that the marker calendar offers:

**More consistent day counts:** Each marker has 23 days, requiring only two markers in the year to be short on days (the common calendar has five months with abnormal days counts!)

**Better internal comparison:** With the common calendar, two halves of a year can be compared, as well as two quarters, but it’s not easy to go much further. With sixteen parts it is possible to compare down to the base: halves, quarters, eighths, and sixteenths.

**Keyed to astronomy:** There are annual geometries that the Earth makes relative to the Sun, eg. the vertical alignment of the Earth’s rotational axis to it’s orbital axis at the “solstice” positions; the furthest orbital position from the Sun at aphelion. These alignments are slightly transitory and do not occur on a fixed day of the year. And they are not well marked in the common calendar month framework. Even with their transitory nature, the marker calendar makes an attempt at keying the marker periods to these alignments: the northern hemisphere “Winter Solstice” is the zero-point start of the marker timeline.

[**Go To Glossary**](../glossary/readme.md#markers)

### Magnitudes

To get a thumbnail perspective of what size of earthquakes happen through time, the events have been aggregated into magnitude categories demarcated by whole magnitude integer, i.e. all events with a magnitude between M4.0 to M4.9 are counted in the “M4” category, all events with a magnitude between M5.0 to M5.9 are counted in the “M5” category, etc. Although generalized, this allows for an added layer of information to compare.

### Viable Data

Within the data retrieved from the United States Geological Survey database there are noticeable breaks in the availability of data, and seen within the perspective of this almanac as sudden increases in the volume of records. The reason for these is assumed to more viable records could be collected, processed and stored over time through increased technological capacity and/or monitoring network expansion. Whatever the reason might be, these breaks in the data are carefully noted in the almanac and any calculations created only use information from demarcated viable periods. 

## Visualization Types

There are three different types of visualizations, and each magnitude range has their own set. The visualization types are referred to as _the chron-table_, _the stack_, _the equalizer_, and _the stats matrix_.

**The chron-table** is essentially a chronological table of events, and is the basis for the other visualization types. The table has years labeling the rows, and marker periods as the column categories. The cells show the total count of events that occurred at the point in time, of the magnitude range. The cells are then colored according to the value they contain: the higher the value, the darker the color.

**The stack** is the same data (only viable data!) of the chron-table, but the years are discarded and the column values filtered from least to greatest. Cumulative calculations of each marker column are provided at the bottom of the stack, and conditionally colored per calculation. 

**The equalizer** visualization is a combination of multiple stacks of increasing magnitude groups. This allows for viewing all the data in one totality.

**The stats** matrix is the combined calculations from the stacks, grouped by type of calculation.
