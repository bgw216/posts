<template>
  <div class="tags">
    <span @click="toggleTag(String(key))" v-for="(_, key) in data" class="tag">
      {{ key }} <sup>{{ data[key].length }}</sup>
    </span>
  </div>
  <div class="tag-header">{{ selectTag }}</div>
  <a
    :href="withBase(article.regularPath)"
    v-for="(article, index) in selectTag ? data[selectTag] : []"
    :key="index"
    class="posts"
  >
    <div class="post-container">
      <div class="post-dot"></div>
      {{ article.frontMatter.title }}
    </div>
    <div class="date">{{ article.frontMatter.date }}</div>
  </a>
</template>
<script lang="ts" setup>
import { computed, ref } from "vue";
import { useData, withBase } from "vitepress";
import { initTags } from "../functions";

let url = location.href.split("?")[1];
let params = new URLSearchParams(url);
const { theme } = useData();
const data = computed(() => initTags(theme.value.posts));
let selectTag = ref(params.get("tag") ? params.get("tag") : "");
const toggleTag = (tag: string) => {
  selectTag.value = tag;
};
// choose the first key
const defaultDisplayTag = Object.keys(data.value)[0];
if (defaultDisplayTag) {
  toggleTag(defaultDisplayTag);
}
</script>

<style scoped>
.tags {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
}

.tag {
  display: inline-block;
  padding: 0 16px 4px 16px;
  margin: 6px 8px;
  font-size: 0.875rem;
  line-height: 25px;
  background-color: var(--vp-c-bg-alt);
  transition: 0.4s;
  border-radius: 2px;
  color: var(--vp-c-text-1);
  cursor: pointer;
}

.tag sup {
  color: var(--vp-c-brand);
  font-weight: bold;
}

.tag-header {
  padding: 28px 0 10px 0;
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--bt-theme-title);
  font-family: var(--date-font-family);
}

@media screen and (max-width: 768px) {
  .date {
    font-size: 0.75rem;
  }
}
</style>
