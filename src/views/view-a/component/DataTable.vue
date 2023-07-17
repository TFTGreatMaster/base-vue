<template>
  <div>
    <a-table
      bordered
      :size="size"
      :data-source="data.dataSource"
      :columns="columns"
      :loading="tableLoading.isLoading.value"
      :pagination="false"
    >
      <template #headerCell="{ column }">
        <template v-if="column.key === 'action'">
          <span>Thao tác </span>
        </template>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'type'">
          <span>
            <a-tag :color="record.type === 'forder' ? 'gray' : 'green'">
              {{ record.type }}
            </a-tag>
          </span>
        </template>
        <template v-if="column.key === 'action'">
          <span
            v-for="action in column.actions"
            :key="action.key"
            @click="() => action.onClick(record)"
          >
            <a-tooltip>
              <template #title>{{ action.tooltip }}</template>
              <icon>
                <template #component><component :is="action.type" /></template>
              </icon>
            </a-tooltip>
          </span>
        </template>
      </template>
    </a-table>
    <a-pagination
      v-model:current="currentPage"
      :total="data.totalElement"
      show-size-changer
      @change="handlePagination"
    />
  </div>
</template>

<script setup>
import { array, shape, number, func, oneOf } from "vue-types";
import { onMounted, ref } from "vue";
import Icon from "@ant-design/icons-vue";

import { useLoading } from "@/utils/hooks";
import { LIMIT, TABLE_SIZE } from "@/utils/constants";

const props = defineProps({
  data: shape({
    totalElement: number().isRequired,
    dataSource: array().isRequired,
  }),
  columns: array().def([]),
  size: oneOf([TABLE_SIZE.small, TABLE_SIZE.medium, TABLE_SIZE.large]),
  onGetData: func(),
  onPagination: func(),
});

const tableLoading = useLoading();

const currentPage = ref(1);

const handlePagination = async () => {
  tableLoading.setLoading(true);
  try {
    await props.onPagination();
  } finally {
    tableLoading.setLoading(false);
  }
};

const handleGetData = async (params) => {
  tableLoading.setLoading(true);
  try {
    await props.onGetData(params);
  } finally {
    tableLoading.setLoading(false);
  }
};

onMounted(async () => await handleGetData({ page: 1, limit: LIMIT }));
</script>
