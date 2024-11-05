<template>
  <div class="box-list">
    <h3 class="caption">{{ caption }}</h3>
    <div class="items">
      <a href="#" class="item" v-for="item in data">
        <img
          :src="`${item.icon}.png`"
          alt="icon"
          v-if="item.icon"
          class="icon"
        />
        {{ item.value }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue"

const props = defineProps({
  caption: {
    type: String,
    default: "Заголовок",
  },
  items: {
    type: Array,
    default: () => [],
  },
  icons: {
    type: Array,
    default: () => [],
  },
})

const data = computed(() => {
  return props.items.reduce((a, c, i) => {
    const res = { icon: props.icons[i], value: c }
    a.push(res)
    return a
  }, [])
})
</script>

<style lang="scss">
.box-list {
  .caption {
    margin-bottom: 16px;
    color: #7493b0;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
  }

  .items {
    display: flex;
    gap: 12px;
  }

  .icon {
    margin-right: 12px;
  }

  .item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (max-width: $mobile) {
    .items {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  @media screen and (min-width: $min-tablet) {
    .items {
      flex-direction: column;
    }
  }

  @media screen and (min-width: $desktop) {
    .caption {
      margin-bottom: 32px;
    }
  }
}
</style>
