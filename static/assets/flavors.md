## Selecting flavor

Picking a suitable flavor can be challenging, considering how many options there are depending on the language you are using.

Below is a simple cheat sheet to help you pick a suitable flavor for your language/tool, based on list of supported languages on regex101.

| Language   | RegEx101 Flavor | Comments                                                                   |
| ---------- | --------------- | -------------------------------------------------------------------------- |
| JavaScript | ECMAScript      | Uses your browsers native implementation                                   |
| PHP        | PCRE2 or PCRE   | Recent versions of PHP use PCRE2                                           |
| Perl       | PCRE2           |                                                                            |
| Python     | Python          | Emulated but provides a good baseline                                      |
| Ruby       | PCRE2           | Oniguruma and Onigmo are quite similar to PCRE in their feature set        |
| Java       | Java 8          | Newer versions of Java have greater support for variable width lookbehinds |
| C++        | ECMAScript      |                                                                            |
| Golang     | RE2             |                                                                            |
| .NET       | C# / .NET       |                                                                            |

_Note: This is a living document and subject to change. Feel free to suggest improvements [here](https://github.com/firasdib/Regex101/issues)._
