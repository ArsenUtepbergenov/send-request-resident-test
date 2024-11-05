<template>
  <section class="ecosystem">
    <InfoSection
      heading="Экосистема"
      content="КИП «Мастер» - это большая экосистема предприятий, услуг и производств.
        Ещё одна строка текста описания"
      class="info"
    />
    <div class="circles container">
      <CircleBox
        text="Центролизированный вывоз ТКО 
    и промышленных отходов"
        class="circle-box-first"
      />
      <CircleBox
        text="Аудит оформления деклараций НВОС"
        class="circle-box-third"
      />
      <CircleBox
        text="Центролизированный вывоз ТКО 
    и промышленных отходов"
        class="circle-box-second"
      />
    </div>
    <div class="eco-img-wrapper">
      <img :src="'eco-tablet.png'" class="eco-img" />
    </div>
    <div class="btn-wrapper">
      <PrimaryButton @click="open">Стать резидентом</PrimaryButton>
    </div>
    <AppModal
      v-model="show"
      title="Заполните заявку, чтобы стать резидентом"
      @confirm="confirm"
    >
      <template #default>
        <InputText
          v-model="data.nameOrganization.value"
          @isError="handleNameError"
          field-name="name-organization"
          label-text="Наименование организации / ИП"
        />
        <InputMask
          v-model="data.phone.value"
          @isError="handlePhoneError"
          field-name="phone"
          label-text="Контактный телефон"
        />
        <MultipleSelect
          v-model="data.typePremises.value"
          @isError="handleTypeError"
          field-name="type-premises"
          label-text="Тип помещения"
          :options="[
            { value: 1, label: 'Производственная площадь' },
            { value: 2, label: 'Личные жилые помещения' },
          ]"
          multiple
        />
        <InputText
          v-model="data.address.value"
          @isError="handleAddressError"
          field-name="address"
          placeholder="Адрес"
        />
        <NumberRange
          label-text="Площадь помещения (м2)"
          v-model:from="data.area.value[0]"
          v-model:to="data.area.value[1]"
          @isError="handleAreaError"
        />
        <DateRange
          label-text="Дата начала аренды"
          v-model:from="data.date.value[0]"
          v-model:to="data.date.value[1]"
          @isError="handleDateError"
        />
        <PrimaryButton @click="confirm" :disabled="isNotAvailableSend"
          >Отправить</PrimaryButton
        >
      </template>
    </AppModal>
  </section>
</template>

<script setup>
import { ref, reactive, computed, toRaw } from "vue"
import InfoSection from "@/components/InfoSection.vue"
import CircleBox from "@/components/CircleBox.vue"
import PrimaryButton from "@/components/UI/Button/PrimaryButton.vue"
import AppModal from "@/components/UI/Modals/AppModal.vue"
import InputText from "@/components/UI/Inputs/InputText.vue"
import InputMask from "@/components/UI/Inputs/InputMask.vue"
import MultipleSelect from "@/components/UI/Inputs/MultipleSelect.vue"
import NumberRange from "@/components/UI/Inputs/NumberRange.vue"
import DateRange from "@/components/UI/Inputs/DateRange.vue"
import ResidentService from "../services/resident"

const data = reactive({
  nameOrganization: { value: "", error: "" },
  phone: { value: "", error: "" },
  typePremises: { value: null, error: "" },
  address: { value: "", error: "" },
  area: { value: [], error: "" },
  date: { value: [], error: "" },
})

function handleNameError(value) {
  data.nameOrganization.error = value
}

function handlePhoneError(value) {
  data.phone.error = value
}

function handleTypeError(value) {
  data.typePremises.error = value
}

function handleAddressError(value) {
  data.address.error = value
}

function handleAreaError(value) {
  data.area.error = value
}

function handleDateError(value) {
  data.date.error = value
}

const show = ref(false)

const isNotAvailableSend = computed(() => {
  return [
    data.nameOrganization.error,
    data.phone.error,
    data.typePremises.error,
    data.address.error,
    data.area.error,
    data.date.error,
  ].some((e) => e)
})

function confirm() {
  if (!isNotAvailableSend.value) {
    ResidentService.sendRequest(toRaw(data)).then((result) => {
      console.log(result)
      show.value = false
    })
  }
}

function open() {
  show.value = true
}
</script>

<style lang="scss">
.ecosystem {
  .info {
    margin-bottom: 40px;
  }

  .circles {
    position: relative;
    width: 100%;
    height: 290px;
    margin: auto;

    .circle-box-second,
    .circle-box-third,
    .circle-box-first {
      position: absolute;
    }

    .circle-box-first {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .eco-img-wrapper {
    width: 100%;
    height: 100%;
    margin: auto;
    overflow-x: hidden;

    .eco-img {
      background-size: cover;
      width: 100%;
      max-width: 100vw;
    }
  }

  .btn-wrapper {
    margin-bottom: 82px;
  }

  @media screen and (max-width: $mobile) {
    .circles {
      max-width: 340px;

      .circle-box-third {
        top: 140px;
        left: 0;
      }

      .circle-box-second {
        top: 140px;
        right: 0;
      }
    }

    .info {
      margin-bottom: 40px;
    }

    .eco-img-wrapper {
      margin-bottom: 42px;
    }
  }

  @media screen and (min-width: $min-tablet) {
    .circles {
      max-width: 540px;

      .circle-box-third {
        top: 144px;
        left: 0;
      }

      .circle-box-second {
        top: 144px;
        right: 0;
        display: none;
      }
    }

    .info {
      margin-bottom: 72px;
    }

    .eco-img-wrapper {
      max-width: 768px;
      margin-bottom: 65px;
    }
  }

  @media screen and (min-width: $desktop) {
    .btn-wrapper {
      margin-bottom: 182px;
    }
  }
}
</style>
