# minimum-repro
 
```
$ /minimum-repro/node_modules/.bin/eslint .

/minimum-repro/named.js
  1:10  error  abc not found in './alpha'  import/named
  1:15  error  def not found in './alpha'  import/named

/minimum-repro/namespace.js
  3:19  error  'abc' not found in imported namespace 'alpha'  import/namespace
  4:19  error  'def' not found in imported namespace 'alpha'  import/namespace

✖ 4 problems (4 errors, 0 warnings)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
