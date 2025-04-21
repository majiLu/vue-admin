<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang='ts'>
import { h, ref, type Ref } from 'vue'
import mgFormItem from './mg-form-item.vue';
type MgFormImtem = InstanceType<typeof mgFormItem>
interface State {
  [key: string]: unknown;
}
export default {
  setup(props: { submit: (data: State) => void }, { expose, slots }) {
    const itemRefs: Ref<(Ref<MgFormImtem>[])> = ref([]);
    // 获取表单数据
    const getFormData = () => {
      const formData: State = {}
      itemRefs.value?.forEach(item => {
        let record = null
        if (record = item.value.getFieldValue()) {
          formData[record.field] = record.value
        }
      })
      return formData
    }

    expose({
      getFormData,
    })

    const renderSlotWithProps = () => {
      // 传递的属性和事件
      const eventHandlers = {
        ww: () => alert('Slot clicked!'),
      };
      return slots.default && slots.default()?.map((slotContent: any, index) => {
        const divRef = ref<MgFormImtem>();
        itemRefs.value[index] = divRef as any;
        const props = { ref: divRef };
        // 确保 slotContent.default 是一个函数并调用它
        const defaultSlotContent = typeof slotContent === 'function' ? slotContent() : slotContent?.default?.();
        return h(slotContent, {
          ...props,
          ...eventHandlers,
          key: index,
        }, defaultSlotContent);
      }) || [];
    };

    return () => {
      return h('form', {
        onSubmitPrevent: props.submit
      }, renderSlotWithProps());
    };

  },
}

</script>

<style scoped></style>
