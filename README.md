# Hydegraph &mdash; Decentralized Graph Database using Hybrid API

- Free software revolution 1.0: Decentralization of Code
- Free software revolution 1.5: Blockchain and Cryptocurrencies
- Free software revolution 2.0: Decentralization of Data

Scifi fans may recognize Hyde as one Mr Hyde &mdash; the distant ancestor of Dr. Bruce Banner & the Incredible Hulk. "Hy" is taken from "Hybird API", "de" from "decentralized" and "graph" from graph database. The Hulk analogy is meant to imply that Hydegraph will transform the seemingly powerless user's desktop computers and mobile devices into something that can rival MAGA+F (Microsoft Apple Google Amazon Facebook).

Get search results in a web spreadsheet, which itself is programmable.

There are at least 3 fundamental paradigm shifts that are required to make this happen -- graph database, decentralized user authentication, hybrid programming language API -- which may explain why it has not been achieved so far, as the likelihood of finding someone or a group of programmers mastering all 3 fields would be infinitesimal.

It takes a finite time t0 for programmer P0 to convince programmer P1 to believe in this vision, to be called Phosway. Let t_i be the time taken for programmer P_i to convince programmer P_{i+1}. So we hope that t_i < t_{i+1} is true.
When i is small, P_i will be affected by trends in computer programming, more likely to choose to dismiss Phosway rather than believing in it.



## Graph Database

- A json file is part of a graph database.

This is the first paradigm shift and practical understanding that we wish to impart in order to convince programmers they can contribute to something bigger than MAGA+F.
Academics would not be interested in this debate. 



What only MAGA+F can do in-house, all programmers can do now, producing MAGA+F clones, and better.

Chances of success of similar projects? How did their teams grow?

 
## II: Decentralized User Authentication
The term "decentralized" has been "hijacked and abused" by blockchain advocates in the past few years with some notable, but limited, progress. We adopted this term largely due to the fact that our framework has a common root with blockchain in asymmetric cryptography, and it modifies significantly one of the most fundamental step in network computing: user authentication.


## III: Hybrid Programming Language API

Universal interface script

We have initially demonstrated decentralized user authentication with "Greeting with A Secret Phrase" (GASP) protocol in the following link:

- https://github.com/udexon/XIDT/blob/master/Greet_Secret_Phrase.md

The example above employed Websocket messaging. In applications where SSH tunnel is required, Websocket is problematic. As such, we are implementing GASP over basic AJAX as shown below:

1. The source code for Hydegraph AJAX demo is available here:

- https://github.com/udexon/Hydegraph/tree/master/phos

2. The following commands are entered via the browser console:

```js
c=new JSEncrypt()
F("nxhr: phos.php xo: xsqrh:")
F('a b c s: 9 3 + s: '+ btoa(c.getPublicKey()) 
+' b64d: 4 orpb: hex: enc: b64e: s:',"je: xsend:")
```

(The HTML web page belong to an older example which briefly describes the principles of Phoscript &mdash; a Forth-like script that can act as a wrapper shell in almost all known programming languages, including Python, JavaScript and PHP.)

i. `c=new JSEncrypt()` initializes a `JSEncrypt` object for asymmetric cryptography.

ii. `F("nxhr: phos.php xo: xsqrh:")` initializes the AJAX connection.

iii. `F('a b c s: 9 3 + s: '+ btoa(c.getPublicKey()) 
+' b64d: 4 orpb: hex: enc: b64e: s:',"je: xsend:")`

- sends the public key of `c` (`btoa(c.getPublicKey())`) to the back-end
- `b64d:` decodes the public key by calling `base64_decode()` in PHP
- `4 orpb:` generates a 4-byte random number by calling `openssl_random_pseudo_bytes()`
- `hex:` converts the random number into hexadecimal notation (string)
- `enc:` encrypt the random number using `openssl_public_encrypt()`
- `b64e:` convert the encrypted message by calling `base64_encode()` so that the results are human readable

<img src="https://github.com/udexon/Hydegraph/blob/master/Hydegraph/GASP.png" width=400>
