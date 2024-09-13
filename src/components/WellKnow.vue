<template>
  <pre>{{ formattedJson }}</pre>
</template>

<script>

import assetLinks from '../assets/assetlinks.json'; // Adjust path accordingly

export default {
  data() {
    return {
      jsonData: assetLinks,
    };
  },
  computed: {
    formattedJson() {
      return JSON.stringify(this.jsonData, null, 2);
    },
  },
};
</script>

<style>
pre {
  background: #f4f4f4;
  padding: 10px;
  border-radius: 4px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
