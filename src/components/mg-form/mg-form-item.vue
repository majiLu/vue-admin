<template>
  <div class="form-item form-item-render">
    <slot>
      <label :for="field">{{ label }}</label>
      <div class="form-item-content" :class="{ 'is-invalid': error }">
        <img :src="icon" alt="" v-if="icon" />
        <input :type="type" :placeholder="placeholder" :id="field" :value="modelValue" @input="validate($event)" />
      </div>
      <span v-if="error" class="error line-clamp-2">{{ error }}</span>
    </slot>
  </div>
</template>

<script lang='ts' setup>
import { isRegex } from './util'
import { ref } from 'vue'


type Rule = {
  required?: boolean;
  message?: string;
  pattern?: string | RegExp
}
const props = defineProps({
  type: {
    type: String,
    defaut: 'text'
  },
  placeholder: {
    type: String,
  },
  icon: {
    type: String,
  },
  label: {
    type: String,
  },
  field: {
    type: String,
  },
  modelValue: {
    type: String,
  },
  rules: {
    type: Array<Rule>,
    default: []
  }
})

const emits = defineEmits(['update:modelValue'])
const error = ref('')
const validate = (e: Event) => {
  const localValue = (e.target as HTMLInputElement)?.value;
  for (const rule of props.rules) {
    if (rule.required && !localValue) {
      error.value = rule.message || `${props.field} is required`;
      break;
    } else if (rule.pattern && localValue) {
      const pattern = isRegex(rule.pattern) ? rule.pattern : new RegExp(rule.pattern)
      if (!pattern.test(localValue)) {
        error.value = rule.message || `${props.field} should match ${pattern}`;
        break;
      }
    } else {
      error.value = ''
    }
  }
  emits('update:modelValue', localValue)
}

defineExpose({
  getFieldValue(): { field: string, value: unknown } | null {
    return props.field ? {
      field: props.field || '',
      value: props.modelValue
    } : null
  },
  validate
})
</script>

<style>
.form-item {
  padding: 5px;
}

.form-item-slot {
  display: flex;
  justify-items: center;
}

.form-item-render {
  .form-item-content {
    background-color: white;
    display: flex;
    align-items: center;
    padding: 8px;

    img {
      width: 14px;
      height: 14px;
    }

    input {
      padding-left: 5px;
      outline: none;
    }

    input::placeholder {
      color: gainsboro;
      font-size: 0.8rem;
    }
  }
}

.is-invalid {
  border-color: red;
}

.error {
  color: red;
  /* font-size: 12px; */
}
</style>
