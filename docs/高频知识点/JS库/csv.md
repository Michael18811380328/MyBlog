# csv

nodeJS 中数据类型和 csv 转换器

CSV for Node.js and the web

#### version

6.3.9

#### downloads

1,330,572

#### repository

github.com/adaltas/node-csv

#### homepage

csv.js.org

The csv project provides CSV generation, parsing, transformation and
serialization for Node.js.

It has been tested and used by a large community over the years and should be
considered reliable. It provides every option you would expect from an
advanced CSV parser and stringifier.

This package exposes 4 packages:

* csv-generate (GitHub), a flexible generator of CSV string and Javascript objects.

* csv-parse (GitHub), a parser converting CSV text into arrays or objects.

* csv-stringify (GitHub), a stringifier converting records into a CSV text.

* stream-transform (GitHub), a transformation framework.

​

The full documentation for the current version is available here.

#### Usage

Installation command is npm install csv.

Each package is fully compatible with the Node.js stream 2 and 3
specifications. Also, a simple callback-based API is always provided for
convenience.

#### Sample

This example uses the Stream API to create a processing pipeline.

```javascript
    // Import the package
    import * as csv from '../lib/index.js';
    
    // Run the pipeline
    csv
    // Generate 20 records
      .generate({
        delimiter: '|',
        length: 20
      })
    // Transform CSV data into records
      .pipe(csv.parse({
        delimiter: '|'
      }))
    // Transform each value into uppercase
      .pipe(csv.transform((record) => {
        return record.map((value) => {
          return value.toUpperCase();
        });
      }))
    // Convert objects into a stream
      .pipe(csv.stringify({
        quoted: true
      }))
    // Print the CSV stream to stdout
      .pipe(process.stdout);
```

#### Development

This parent project doesn't have tests itself but instead delegates the tests to its child projects.

Read the documentation of the child projects for additional information.

#### Related projects

* Pavel Kolesnikov "ya-csv": <http://github.com/koles/ya-csv>

* Chris Williams "node-csv": <http://github.com/voodootikigod/node-csv>

* Mat Holt "PapaParse": <https://github.com/mholt/PapaParse>

​
