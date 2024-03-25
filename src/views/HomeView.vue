<script setup lang="ts">
import ScreenContainer from '@/components/ScreenContainer.vue'
import GlitchedWriter from '@/components/GlitchedWriter.vue'
import {
  languages,
  tools,
  databases,
  platforms,
  packageManagers,
  socials,
  socialsImg,
  designs
} from '@/assets/url'
import IconBlock from '@/components/IconBlock.vue'
import GridCard from '@/components/GridCard.vue'
import { useToast } from '@/helpers/toast'

const typewriterTexts = [
  'Software Developer',
  'Future Software Engineer',
  'Full-stacker',
  'Creative Designer',
  'Entrepreneur',
  'Night Owl',
  'Passionate',
  'Motivator',
  'Team player',
  'Happy spirit',
  'Based'
]

function onPress(item: string) {
  useToast({
    message: `This one is called ${item.charAt(0).toUpperCase() + item.toLowerCase().slice(1)}`
  })
}
</script>

<template>
  <ScreenContainer
    id="start"
    class="relative flex align-center justify-center bg-[url('/src/assets/img/bg2.jpg')] bg-no-repeat bg-cover bg-center"
  >
    <div class="flex flex-col justify-center align-center space-y-2">
      <div>
        <h1 class="font-sans font-bold text-4xl text-primaryLight sm:text-6xl xl:text-6xl">
          Anouar El Ghazaoui
        </h1>
      </div>
      <div class="bg-neutralDark px-4 py-2 rounded-full flex align-end space-x-2 xl:px-8">
        <p class="font-bold text-xl text-snow">#</p>
        <GlitchedWriter
          :text="typewriterTexts"
          class="font-medium font-sans italic text-2xl text-white sm:text-4xl xl:text-3xl"
        />
      </div>
    </div>
  </ScreenContainer>
  <ScreenContainer
    id="info"
    class="flex align-center justify-center bg-[url('/src/assets/img/bg4.jpg')] bg-no-repeat bg-cover bg-center"
  >
    <div
      class="flex flex-col text-3xl justify-evenly align-center w-[90%] h-[90%] xl:space-x-12 xl:flex-row xl:h-[80%]"
    >
      <div class="rounded-lg hidden h-full w-[90%] items-center xl:h-[80%] xl:w-[40%] xl:flex">
        <v-img
          src="/src/assets/img/morocco.jpg"
          :max-height="800"
          :max-width="800"
          cover
          position="bottom"
          class="shadow-xl ring-neutralLight ring-8 rounded ring-opacity-50 w-full h-full"
        />
      </div>
      <div
        class="h-[80%] w-[60%] text-base flex flex-col justify-center items-center space-y-12 sm:text-3xl lg:text-4xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"
      >
        <p class="font-medium font-sans text-neutralDark">
          From my earliest days, I've been driven by a simple desire: to create experiences that
          bring joy to others. It all began with the simple pleasure of gaming on my PS2, igniting a
          passion for gaming that led me to ponder a significant question: Why not create my own
          game?
        </p>
        <div>
          <p class="font-bold italic font-sans text-primaryLight">
            Creativity is intelligence having fun..
          </p>
          <p class="font-medium font-sans text-neutralDark">
            As I honed my skills, I realized my interests extended beyond gaming. I found equal
            fascination in the artistry of user interface design and the intricacies of coding.
            Rather than choosing between them, I embraced both disciplines wholeheartedly.
          </p>
        </div>
        <p class="font-medium hidden font-sans text-neutralDark xl:flex">
          Today, armed with a passion for both frontend design and backend development, I stand
          poised as a full-stack developer and future software engineer. With a commitment to
          excellence and a hunger for innovation, I am ready to make my mark in the ever-evolving
          landscape of technology.
        </p>
        <p class="font-medium hidden font-sans text-neutralDark xl:flex">
          Fueled by a passion for creativity and a love for exploration, I embark on every coding
          journey with a sense of adventure. With each line of code, I strive to craft experiences
          that inspire and delight. As I navigate the dynamic world of technology, my thirst for
          discovery remains unquenched, driving me to both explore new horizons and innovate with
          every keystroke.
        </p>
      </div>
    </div>
  </ScreenContainer>
  <ScreenContainer
    id="info"
    class="flex align-center justify-center bg-[url('/src/assets/img/bg2.jpg')] bg-no-repeat bg-cover bg-center xl:hidden"
  >
    <div class="flex text-3xl items-center w-[90%] h-[90%] xl:space-x-12 xl:flex-row xl:h-[80%]">
      <div
        class="rounded-lg h-full w-full flex justify-center items-center xl:h-[80%] xl:w-[40%] xl:hidden"
      >
        <v-img
          src="/src/assets/img/morocco.jpg"
          :max-height="800"
          :max-width="800"
          cover
          position="bottom"
          class="shadow-xl ring-neutralLight ring-8 rounded ring-opacity-50 w-full h-full"
        />
      </div>
    </div>
  </ScreenContainer>
  <ScreenContainer
    id="info"
    class="flex align-center justify-center bg-[url('/src/assets/img/bg2.jpg')] bg-no-repeat bg-cover bg-center xl:hidden"
  >
    <div
      class="flex flex-col text-3xl justify-evenly align-center w-[90%] h-[95%] space-x-12 xl:flex-row xl:h-[80%]"
    >
      <div
        class="h-[80%] w-[60%] text-base flex flex-col justify-center items-center space-y-12 sm:text-3xl lg:text-4xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl"
      >
        <p class="font-medium hidden font-sans text-neutralDark">
          From my earliest days, I've been driven by a simple desire: to create experiences that
          bring joy to others. It all began with the simple pleasure of gaming on my PS2, igniting a
          passion for gaming that led me to ponder a significant question: Why not create my own
          game?
        </p>
        <div class="hidden">
          <p class="font-bold italic font-sans text-primaryLight">
            Creativity is intelligence having fun..
          </p>
          <p class="font-medium font-sans text-neutralDark">
            As I honed my skills, I realized my interests extended beyond gaming. I found equal
            fascination in the artistry of user interface design and the intricacies of coding.
            Rather than choosing between them, I embraced both disciplines wholeheartedly.
          </p>
        </div>
        <p class="font-medium font-sans text-neutralDark">
          Today, armed with a passion for both frontend design and backend development, I stand
          poised as a full-stack developer and future software engineer. With a commitment to
          excellence and a hunger for innovation, I am ready to make my mark in the ever-evolving
          landscape of technology.
        </p>
        <p class="font-medium font-sans text-neutralDark">
          Fueled by a passion for creativity and a love for exploration, I embark on every coding
          journey with a sense of adventure. With each line of code, I strive to craft experiences
          that inspire and delight. As I navigate the dynamic world of technology, my thirst for
          discovery remains unquenched, driving me to both explore new horizons and innovate with
          every keystroke.
        </p>
      </div>
    </div>
  </ScreenContainer>
  <ScreenContainer
    id="info"
    class="flex align-center justify-center bg-[url('/src/assets/img/bg1.jpg')] bg-no-repeat bg-cover bg-center"
  >
    <div class="flex flex-col justify-evenly align-center w-[90%] h-[90%] space-x-24 xl:flex-row">
      <div class="flex align-center justify-center h-[80%] flex-col space-y-32 w-[90%] 2xl:w-[50%]">
        <div class="space-y-4">
          <div class="flex space-x-4 align-end">
            <v-img
              src="/src/assets/img/coding.png"
              aspect-ratio="1/1"
              :min-width="42"
              :height="42"
              :max-width="42"
            />
            <h1
              class="text-4xl font-bold font-sans text-primaryLight underline sm:text-5xl lg:text-5xl xl:text-4xl 2xl:text-5xl"
            >
              My Techstack
            </h1>
          </div>
          <p
            class="text-xl font-medium font-sans text-neutralDark sm:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl"
          >
            Full Stack Engineering embodies my passion for technology and thirst for learning. It
            offers diverse challenges and the chance to make a tangible impact while fostering
            collaboration. Ready to embrace any challenge, I aim to contribute meaningfully to the
            tech landscape.
          </p>
        </div>

        <GridCard title="Languages">
          <IconBlock v-for="(url, key) in languages" v-bind:key="key" @click="onPress(key)">
            <img :src="url" />
          </IconBlock>
        </GridCard>
      </div>

      <div class="w-[40%] hidden align-center justify-center h-[70%] flex-col space-y-12 xl:flex">
        <GridCard>
          <IconBlock v-for="(url, key) in tools" v-bind:key="key" @click="onPress(key)">
            <img :src="url" />
          </IconBlock>
        </GridCard>

        <GridCard>
          <IconBlock
            v-for="(url, key) in packageManagers"
            v-bind:key="key"
            @click="() => onPress(key)"
          >
            <img :src="url" />
          </IconBlock>
        </GridCard>

        <GridCard>
          <IconBlock v-for="(url, key) in databases" v-bind:key="key" @click="onPress(key)">
            <img :src="url" />
          </IconBlock>
        </GridCard>

        <GridCard>
          <IconBlock v-for="(url, key) in platforms" v-bind:key="key" @click="onPress(key)">
            <img :src="url" />
          </IconBlock>
        </GridCard>

        <GridCard>
          <IconBlock v-for="(url, key) in designs" v-bind:key="key" @click="onPress(key)">
            <img :src="url" />
          </IconBlock>
        </GridCard>
      </div>
    </div>
  </ScreenContainer>
  <ScreenContainer
    id="info"
    class="flex align-center justify-center bg-[url('/src/assets/img/bg1.jpg')] bg-no-repeat bg-cover bg-center xl:hidden"
  >
    <div class="flex flex-col text-sm justify-evenly align-center w-[90%] h-[90%] space-x-24">
      <div class="w-full flex align-center justify-evenly h-full flex-col space-y-12">
        <GridCard>
          <IconBlock v-for="(url, key) in tools" v-bind:key="key" @click="onPress(key)">
            <img :src="url" />
          </IconBlock>
        </GridCard>

        <GridCard>
          <IconBlock
            v-for="(url, key) in packageManagers"
            v-bind:key="key"
            @click="() => onPress(key)"
          >
            <img :src="url" />
          </IconBlock>
        </GridCard>

        <GridCard>
          <IconBlock v-for="(url, key) in databases" v-bind:key="key" @click="onPress(key)">
            <img :src="url" />
          </IconBlock>
        </GridCard>

        <GridCard>
          <IconBlock v-for="(url, key) in platforms" v-bind:key="key" @click="onPress(key)">
            <img :src="url" />
          </IconBlock>
        </GridCard>

        <GridCard>
          <IconBlock v-for="(url, key) in designs" v-bind:key="key" @click="onPress(key)">
            <img :src="url" />
          </IconBlock>
        </GridCard>
      </div>
    </div>
  </ScreenContainer>
  <ScreenContainer
    id="info"
    class="flex align-center justify-center bg-[url('/src/assets/img/bg3.jpg')] bg-no-repeat bg-cover bg-center"
  >
    <div class="flex flex-col items-center space-y-12">
      <h1
        class="text-3xl font-bold font-sans bg-gradient-to-r from-primaryLight via-primaryLight to-neutralDark text-transparent bg-clip-text sm:text-5xl lg:text-7xl"
      >
        Wanna know what I am up to?
      </h1>
      <div class="flex space-x-12">
        <IconBlock
          v-for="(url, key) in socials"
          v-bind:key="key"
          @click="
            () => {
              console.log(url)
            }
          "
        >
          <a :href="url" target="_blank" class="w-full h-full">
            <v-img :width="100" :src="socialsImg[key]" class="rounded-lg" />
          </a>
        </IconBlock>
      </div>
    </div>
  </ScreenContainer>
</template>
