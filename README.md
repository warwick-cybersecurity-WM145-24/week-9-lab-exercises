# Week  9 lab exercises

Pwn an website

## Our blog webpage

Webpage sits in the `/webpage` directory.

to run locally:
```bash
(cd webpage && python -m http.server)
```

## Api content server

Mock API sits in the `/server` directory:

to run
```bash

# install dependencies
(cd mockeserver && npm install)

# to start the server on port 3000
(cd mockeserver && npm start)

# to run the HURL tests
cd tests
cat createNewArticle.hurl | hurl
cat getAnArticle.hurl | hurl
```

---

## API docs

# GET Article

Gets an article by its ID

`GET article/`

## Parameters

- `<int> articleId` - eg: `79193`

## Examples

```bash
curl http://localhost:3000
```

**returns**

```json
[
  {
    "id": 64940,
    "name": "2015-16",
    "artistIds": [
      64788,
      51293
    ],
    "trackIds": [
      95034,
      10350,
      357,
      78289,
      65117,
      45950
    ],
    "description": "Ad odio voluptate dolores dolorum reprehenderit. Laudantium distinctio ut. Sint corrupti debitis voluptates sit. Sunt dolores vero molestias occaecati repudiandae aut.",
    "images": [
      "https://www.sikhnet.com/files/audio/image/main/40149_441798284225_49643819225_5542794_4596096_n.jpg",
      "http://placeimg.com/640/480"
    ],
    "year": 2020,
    "tags": [
      "atque",
      "vel",
      "ratione"
    ],
  },
  {
    "id": 94286,
    "name": "2018 Los Angeles Samagam",
    "artistIds": [
      93377,
      12251
    ],
    "trackIds": [
      27411,
      4337,
      128,
      37052,
      30813,
      23,
      82836
    ],
    "description": "Consequuntur dolores consequatur eligendi voluptas sit. Autem autem blanditiis et sint tenetur. Rerum omnis dolores nihil dolorum dolor tempore autem harum. Occaecati vel non qui ab aliquid. Unde aliquam eaque ad nisi a corrupti sed provident.",
    "images": [
      "https://www.sikhnet.com/files/default_images/album.jpg",
      "http://placeimg.com/640/480"
    ],
    "year": 2018,
    "tags": [
      "magnam",
      "repellat",
      "quae"
    ],
  }
  ...
]
```
