# HelloSign Embedded

> Embed [HelloSign][external_hellosign] signature requests and templates from within your web application.

[![Npm version][badge_npm-version]][external_npm]
[![Npm downloads][badge_npm-downloads]][external_npm]
[![Travis][badge_travis]][external_travis]
[![David][badge_david]][external_david]

<br/>

## Usage

> The instructions below are for HelloSign Embedded v2. We recommend using it instead of v1 for new projects. Please check the [migration guide][wiki_migration-guide] if you need help upgrading from v1 to v2.

Start by installing the HelloSign Embedded library from [npm](https://npmjs.com).

```bash
npm install hellosign-embedded
```

In your frontend app, import `hellosign-embedded` and instantiate a new client with your API app's client ID.

```js
import HelloSign from 'hellosign-embedded';

const client = new HelloSign({
  clientId: 'Your client ID'
});
```

When you're ready to launch HelloSign Embedded, simply call `open()` on the client with your signature request's signing URL.

```js
client.open(signUrl);
```

For a more detailed and in-depth walkthrough, check the [QuickStart guide][wiki_quickstart] on the Wiki. For more information on how to use HelloSign Embedded, visit the [API Documentation][wiki_api-documentation].


## Resources

* [Quickstart][wiki_quickstart]
* [API Documentation][wiki_api-documentation]
* [Walkthroughs][external_walkthroughs]
* [Changelog][changelog]
* [Demo][external_demo]

<br/>
<br/>
<hr/>

&copy; 2018 [HelloSign][external_hellosign]. All rights reserved.






[changelog]: ./CHANGELOG.md

[badge_npm-version]: https://img.shields.io/npm/v/hellosign-embedded.svg
[badge_npm-downloads]: https://img.shields.io/npm/dm/hellosign-embedded.svg
[badge_david]: https://img.shields.io/david/hellosign/hellosign-embedded.svg
[badge_travis]: https://img.shields.io/travis/hellosign/hellosign-embedded/master.svg

[wiki_home]: https://github.com/hellosign/hellosign-embedded/wiki
[wiki_api-documentation]: https://github.com/hellosign/hellosign-embedded/wiki/API-Documentation-%28v2%29
[wiki_changelog]: https://github.com/hellosign/hellosign-embedded/wiki/Changelog
[wiki_migration-guide]: https://github.com/hellosign/hellosign-embedded/wiki/Migration-Guide-(v1-to-v2)
[wiki_quickstart]: https://github.com/hellosign/hellosign-embedded/wiki/Quickstart

[external_david]: https://david-dm.org/hellosign/hellosign-embedded
[external_demo]: https://github.com/hellosign/hellosign-embedded-demo
[external_hellosign]: https://hellosign.com
[external_npm]: https://npmjs.org/package/hellosign-embedded
[external_travis]: https://travis-ci.org/hellosign/hellosign-embedded.svg?branch=master
[external_walkthroughs]: https://app.hellosign.com/api/embeddedSigningWalkthrough
