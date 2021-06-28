# NAWC TwentySeventeen Child Theme

This repository contains the source code for the default WordPress
`TwentySeventeen` child theme used on the
[NA Western Cape](https://na.org.za/wc/) website. It contains custom changes
to the [12 Step Meeting List](https://wordpress.org/plugins/12-step-meeting-list/)
plugin that allows the site to manage a series of meetings that the plugin
currently does not support.

## 12 Step Meeting List Changes

This theme customises the 12 Step Meeting List plugin by allowing you to create:

- Online Only meetings
- Hybrid (in-person and online) meetings
- In-Person Only meetings

These meeting types are available when you create or edit a meeting in the WordPress admin area.

## Visual Theme Changes

With the changes to the plugin this theme also contains various CSS changes that affect the way meetings are displayed in the listing view as well as on the detail page.

### Meeting Listing Page

On the page where meetings are listed (i.e. `/meetings/`) the theme will now visually indicate a few new things.

- Online and Hybrid meeting types are now visually indicated by displaying a:
    - Green visual indicator for `Online Only` meetings.
    - Orange visual indicator for `Hybrid` meetings.
- For Online Only meetings the address will be removed completely from the listing so only Hybrid or In-Person meetings will show their address fields.

### Meeting Detail Page

When viewing a meeting's detail (information) page the theme will now:

- Show the type of meeting (either Online or Hybrid) next to the meeting list name.
- Address details for a meeting are crossed out for Online Only meetings as a visual cue to people that the venue is not open.
- Within the Meeting Information box the meeting type is also indicated with a tick next to it so it is clear to people what type of meeting they are viewing.

## Requirements

Your WordPress website must be based on the `TwentySeventeen` theme for this theme to work. This is a child theme of `TwentySeventeen` so it won't work unless your website is based off this.

If you do not use the `TwentySeventeen` theme for your site, you can manually pull the changes from this repository into your own theme. See the [Manual Implementation](#manual-implementation) section below.

## Installing the Theme

To install this theme download the latest [nawc.zip][dist] WordPress zip file
(or by [clicking here][dist]) and go to your WordPress Themes page
(i.e. `/wp-admin/themes.php`) and upload the zip file here. Once uploaded you
will need to activate the theme for the new theme to take effect.

## Managing Your Meetings

With the theme installed (or the manual implementation below) you will now have three new options when creating or editing a meeting in your WordPress admin area. Go to your Meeting list plugin admin area at `/wp-admin/edit.php?post_type=tsml_meeting` and either click `Add New` or click on an existing meeting to change it's meeting type.

Please read the following documentation for adding or editing a meeting based on the type of meeting you would like to display:

1. [Online Only Meetings][online]
2. [Hybrid Meetings][hybrid] (in-person and online)
3. [In-Person Only Meetings][person]

## Manual Implementation

For non-twentyseventeen users this section is for you. To implelement these changes you need to copy the code from [functions.php][functions] as well as the CSS styles contained in [style.css][style].

### functions.php

Open up your theme's `functions.php` file and paste the following code anywhere within it:

```php
/**
 * Meeting List changes to include new meeting types.
 */
if (function_exists('tsml_custom_types')) {
    tsml_custom_types([
        'HYB' => 'Online & In-Person',
        'IPO' => 'In-Person',
    ]);
}
```

### style.css

There is quite a bit of css you will need to copy and paste into your own theme and in order to get the right bit make sure you copy [these lines of code from the style.css][style-blob] (it should be lines `52` through to `147`).

## License

This software is release under the `MIT License`. See the [LICENSE](LICENSE) file for more details.

## Changelog

For detailed changelogs please go to the [/docs/tags/](/docs/tags/) directory.

[dist]: https://raw.githubusercontent.com/nawc/child-theme/main/dist/nawc.zip
[functions]: /src/functions.php
[style]: /src/style.css
[style-blob]: https://github.com/nawc/child-theme/blob/66b126e155dcc1020d0c2aa8b8e0920579d1c6a7/src/style.css#L52-L147
[online]: /docs/ONLINE_ONLY_MEETINGS.md
[hybrid]: /docs/HYBRID_MEETINGS.md
[person]: /docs/IN-PERSON_ONLY_MEETINGS.md
