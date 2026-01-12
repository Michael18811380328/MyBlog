# iconv-lite

字符串不同格式转码

#### version

0.6.3 &#x20;

#### downloads

74,008,351&#x20;

#### repository

github.com/ashtuchkin/iconv-lite&#x20;

#### homepage

github.com/ashtuchkin/iconv-lite&#x20;

#### iconv-lite: Pure JS character encoding conversion

* No need for native code compilation. Quick to install, works on Windows and in sandboxed environments like Cloud9.

* Used in popular projects like Express.js (body\_parser), Grunt, Nodemailer, Yeoman and others.

* Faster than node-iconv (see below for performance comparison).

* Intuitive encode/decode API, including Streaming support.

* In-browser usage via browserify or webpack (\~180kb gzip compressed with Buffer shim included).

* Typescript type definition file included.

* React Native is supported (need to install stream module to enable Streaming API).

* License: MIT.

#### Usage

##### Basic API

```javascript
var iconv = require('iconv-lite');

// Convert from an encoded buffer to a js string.
str = iconv.decode(Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f]), 'win1251');

// Convert from a js string to an encoded buffer.
buf = iconv.encode("Sample input string", 'win1251');

// Check if encoding is supported
iconv.encodingExists("us-ascii")
```

##### Streaming API   &#x20;

```javascript
// Decode stream (from binary data stream to js strings)
http.createServer(function(req, res) {
    var converterStream = iconv.decodeStream('win1251');
    req.pipe(converterStream);

    converterStream.on('data', function(str) {
        console.log(str); // Do something with decoded strings, chunk-by-chunk.
    });
});

// Convert encoding streaming example
fs.createReadStream('file-in-win1251.txt')
    .pipe(iconv.decodeStream('win1251'))
    .pipe(iconv.encodeStream('ucs2'))
    .pipe(fs.createWriteStream('file-in-ucs2.txt'));

// Sugar: all encode/decode streams have .collect(cb) method to accumulate data.
http.createServer(function(req, res) {
    req.pipe(iconv.decodeStream('win1251')).collect(function(err, body) {
        assert(typeof body == 'string');
        console.log(body); // full request body string
    });
});
```

#### Supported encodings

* All node.js native encodings: utf8, ucs2 / utf16-le, ascii, binary, base64, hex.

* Additional unicode encodings: utf16, utf16-be, utf-7, utf-7-imap, utf32, utf32-le, and utf32-be.

* All widespread singlebyte encodings: Windows 125x family, ISO-8859 family, IBM/DOS codepages, Macintosh family, KOI8 family, all others supported by iconv library. Aliases like 'latin1', 'us-ascii' also supported.

* All widespread multibyte encodings: CP932, CP936, CP949, CP950, GB2312, GBK, GB18030, Big5, Shift\_JIS, EUC-JP.

See all supported encodings on wiki.

#### Encoding/decoding speed

Comparison with node-iconv module (1000x256kb, on MacBook Pro, Core i5/2.6
GHz, Node v0.12.0). Note: your results may vary, so please always check on
your hardware.

#### BOM handling

* Decoding: BOM is stripped by default, unless overridden by passing stripBOM: false in options (f.ex. iconv.decode(buf, enc, {stripBOM: false})). A callback might also be given as a stripBOM parameter - it'll be called if BOM character was actually found.

* If you want to detect UTF-8 BOM when decoding other encodings, use node-autodetect-decoder-stream module.

* Encoding: No BOM added, unless overridden by addBOM: true option.

#### UTF-16 Encodings

This library supports UTF-16LE, UTF-16BE and UTF-16 encodings. First two are
straightforward, but UTF-16 is trying to be smart about endianness in the
following ways:

* Decoding: uses BOM and 'spaces heuristic' to determine input endianness. Default is UTF-16LE, but can be overridden with defaultEncoding: 'utf-16be' option. Strips BOM unless stripBOM: false.

* Encoding: uses UTF-16LE and writes BOM by default. Use addBOM: false to override.

#### UTF-32 Encodings

This library supports UTF-32LE, UTF-32BE and UTF-32 encodings. Like the UTF-16
encoding above, UTF-32 defaults to UTF-32LE, but uses BOM and 'spaces
heuristics' to determine input endianness.

* The default of UTF-32LE can be overridden with the defaultEncoding: 'utf-32be' option. Strips BOM unless stripBOM: false.

* Encoding: uses UTF-32LE and writes BOM by default. Use addBOM: false to override. (defaultEncoding: 'utf-32be' can also be used here to change encoding.)

#### Other notes

When decoding, be sure to supply a Buffer to decode() method, otherwise badthings usually happen. &#x20;

Untranslatable characters are set to � or ?. No transliteration is currentlysupported. &#x20;

Node versions 0.10.31 and 0.11.13 are buggy, don't use them (see #65, #77).

​
