# Redmine Translucent Theme 1.3.0

This is a simple modern translucent theme with background photos and a left side menu. It has been forked and updated from the [bavarian_dawn](https://github.com/miyanaga/bavarian_dawn) theme to add compatibility for Redmine 5 and provide a variety of layout improvements.

![Screenshot](https://raw.githubusercontent.com/CaelanBorowiec/redmine_translucent/master/screenshot.jpg)

## Features

Modern translucent ticketing system UI for Redmine.
Easily customizable photo wallpaper backgrounds that change hourly.

## Requirements

* Redmine version >= 2.4.x
(Redmine 5.x compatible!)

## Changelog

### 1.4.0
* Restyled top navigation bar.
* Restyled and fixed layout issues with page title and breadcrumbs.
* Large admin menu.
* Minor tweaks to page controls.

### 1.3.0
* Many contrast and margining improvements to projects, activity, news, wiki and ticket pages.
* All external links now open in a new tab.

### 1.2.0
* Implement image theme subclasses
* Dunes image now applies sand subtheme (changes title bars to sand color).
* Disabled default photo background to eliminate distracting photo switching after initial page draw.

### 1.1.1
* Top left Redmine logo is now clickable to return to the site root.
* Fixed tooltips having white-on-white text.

### 1.0.0
* Initial release of redesigned theme based on bavarian_dawn 0.0.1.
* Added background changer javascript and small library of backgrounds.


## Installation

* Extract this theme into a folder named `redmine_translucent` in your Redmine theme directory (e.g. ../public/themes/) or run `git clone https://github.com/CaelanBorowiec/redmine_translucent.git redmine_translucent` in the themes directory.
* Restart Redmine using `touch tmp/restart.txt` to make the theme available in your theme list.
* Select it from the "Theme" dropdown box list by visiting the administration area: "Administration / Settings / Display".
* Save your changes in order to display the redmine_translucent theme.

## Photo Backgrounds
Adding or removing photos from the backgrounds rotation can be done by adding them to the `redmine_translucent/images/wallpapers/` folder and modifying the JSON backgrounds list in [theme.js](https://github.com/CaelanBorowiec/redmine_translucent/blob/master/javascripts/theme.js) at the top of the `wallpaperPicker()` function.

## License

This Redmine theme is open source and released under the terms of the GNU General Public License v2 (GPL).
