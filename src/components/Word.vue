<template>
  <div class="container">
    <h1 class="title"><span class="word">{{ word.content }}</span> <span class="pronunciation">{{ word.pronunciation }}</span></h1>
    <p class="description"><span>{{ word.definition }}</span></p>
    <p class="subtitle">{{ word.subtitle }}</p>
    <p class="source">{{ word.source }}</p>
  </div>
</template>

<script>
export default {
  name: 'Word',
  data: function() {
    return {
      words: {
        '' :{
          'pronunciation': "",
          'definition': "",
          'subtitle': "",
          'source': ""
        }
      }
    }
  },
  computed: {
    word: function() {
      let keys = Object.keys(this.words);
      let w = keys[keys.length * Math.random() << 0];
      return {
        'content': w,
        'pronunciation': this.words[w]['pronunciation'],
        'definition': this.words[w]['definition'],
        'subtitle': this.words[w]['subtitle'],
        'source': this.words[w]['source']
      }
    }
  },

  mounted() {
    let today = new Date().toLocaleDateString();

    if (localStorage.VOCABULARY && localStorage.VOCABULARY_UPDATEDDATE && localStorage.VOCABULARY_UPDATEDDATE === today) {
      this.words = JSON.parse(localStorage.VOCABULARY);
    } else {
      fetch('https://saved-vocabulary-default-rtdb.firebaseio.com/words.json')
        .then(response => response.json())
        .then(data => {
          this.words = data
          localStorage.VOCABULARY = JSON.stringify(data);
          localStorage.VOCABULARY_UPDATEDDATE = today;
          console.log(data)
        });
    }
  }
}
</script>

<style lang="scss">
body {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0C0C0D;
  height: 100vh;
  width: 100vw;
  margin: 0;
  color: #fff;
  font-family: 'IBM Plex Sans', sans-serif;
}

p {
  margin: 0;
}

.container {
  width: 30rem;
}

.title {
  margin: 1rem 0;
  text-indent: -0.2rem;

  &:first-letter {
    text-transform: uppercase;
  }
}

.word {
  font-size: 3rem;
  font-weight: 100;
  line-height: 1;
  letter-spacing: 0.1rem;
  color: rgba(255,255,255);
}

.pronunciation {
  font-size: .8rem;
  font-weight: 400;
  color: rgba(255,255,255,0.4);
}

.description {
  font-size: .8rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: -0.05rem;
  margin: -0.4rem auto 0;
  color: rgba(255,255,255,0.9);

  & span {
    background-color: #fff;
    transition: 0.1s;
  }

  & span:hover {
    background-color: transparent;
  }
}

.subtitle {
  font-size: .6rem;
  font-weight: 100;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  font-family: 'IBM Plex Serif', sans-serif;
  margin: 2rem auto 0;
}

.source {
  font-size: .6rem;
  font-weight: 100;
  line-height: 1.6;
  letter-spacing: 0.05rem;
  font-family: 'IBM Plex Serif', sans-serif;
  margin: 0 auto 1rem;
}

h1::selection,
h1 span::selection,
p::selection {
  background-color: #fff;
}

.vocab__loading {
  font-size: 1.25rem;
}
</style>