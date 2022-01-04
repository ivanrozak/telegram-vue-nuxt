<template>
  <div class="grid grid-cols-10">
    <div class="col-span-3">
      <div class="w-full h-screen border-r border-secondary relative">
        <div class="h-20 flex items-center justify-between px-6">
          <h2 class="text-primary text-2xl font-semibold">Telegram</h2>
          <button class="active:scale-90" @click.prevent="showMenu">
            <IconMenu :fill="color.primary" />
          </button>
          <div
            v-if="menuVisible"
            class="absolute right-0 top-0 mr-6 mt-16 rounded-xl rounded-tr-sm shadow-sm bg-primary focus:outline-none"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="text-white block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                >Account settings</a
              >
            </div>
          </div>
        </div>
        <div class="h-14 px-6 flex items-center justify-between">
          <input
            class="bg-grey w-full mr-5 py-2 px-4 rounded-xl focus:border-white"
            type="text"
            placeholder="Type your message"
          />
          <button class="active:scale-90">
            <IconPlus :fill="color.primary" />
          </button>
        </div>
        <div class="h-14 flex items-center justify-center space-x-4">
          <button class="bg-grey py-2 px-4 font-semibold rounded-lg">
            All
          </button>
          <button
            class="bg-primary text-white py-2 px-4 font-semibold rounded-lg"
          >
            Important
          </button>
          <button class="bg-grey py-2 px-4 font-semibold rounded-lg">
            Unread
          </button>
        </div>
        <div class="overflow-auto">
          <div class="flex items-center px-6 hover:bg-grey cursor-pointer py-4">
            <div class="mr-4 bg-primary rounded-3xl text-center">
              <img src="images/User.png" alt="" />
            </div>
            <div class="flex justify-between w-full">
              <div>
                <h4 class="font-semibold">Theressa Flores</h4>
                <p class="font-light text-md">Why did you do that?</p>
              </div>
              <div class="text-right">
                <p class="text-secondary text-sm">15:20</p>
                <div
                  class="w-5 h-5 bg-primary rounded-full text-white flex items-center justify-center text-xs font-semibold ml-auto"
                >
                  1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-7">
      <!--      <div class="bg-grey w-full h-screen flex justify-center items-center">-->
      <!--        <p>Please select a chat to start messaging</p>-->
      <!--      </div>-->

      <!--      <div class="w-full h-screen relative">-->
      <!--        <div class="h-20 bg-primary flex items-center">Header</div>-->
      <!--        <div class="bg-grey w-full h-[100%]">-->
      <!--          content-->
      <!--        </div>-->
      <!--        <div class="bg-primary h-20 absolute inset-x-0 bottom-0">Input Chat</div>-->
      <!--      </div>-->

      <div class="h-screen w-full flex flex-col justify-between">
        <div class="bg-white h-28 px-8 flex justify-between items-center">
          <div class="flex items-center">
            <img class="w-14 h-14 rounded-2xl" src="images/User.png" alt="" />
            <div class="ml-4">
              <h4 class="font-semibold">Theressa Flores</h4>
              <p class="text-primary font-medium text-sm">Online</p>
            </div>
          </div>
          <button>
            <IconProfile :fill="color.primary" />
          </button>
        </div>
        <div class="bg-grey h-full overflow-y-auto px-8 py-4">
          <div class="flex space-x-3 items-end">
            <img class="h-12 w-12 rounded-2xl" src="images/User.png" alt="" />
            <div
              class="bg-primary rounded-xl rounded-bl-sm px-4 py-2 max-w-[40%]"
            >
              <p class="text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                vel.
              </p>
            </div>
          </div>
          <div class="flex justify-end space-x-3 items-end">
            <div
              class="bg-primary rounded-xl rounded-br-sm px-4 py-2 max-w-[40%]"
            >
              <p class="text-white text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
                vel.
              </p>
            </div>
            <img class="h-12 w-12 rounded-2xl" src="images/User.png" alt="" />
          </div>
        </div>
        <div class="bg-white h-28 px-8 py-5">
          <div
            class="w-full h-full bg-grey flex space-x-5 justify-between items-center rounded-xl px-4"
          >
            <input class="" type="text" placeholder="Type your message..." />
            <div class="flex space-x-3 items-center">
              <IconPlus :fill="color.primary" />
              <IconEmoticon :fill="color.primary" />
              <IconSend :fill="color.primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconMenu from '~/components/icons/IconMenu'
import IconBack from '~/components/icons/IconBack'
import IconDCheck from '~/components/icons/IconDCheck'
import IconEmoticon from '~/components/icons/IconEmoticon'
import IconPlus from '~/components/icons/IconPlus'
import IconProfile from '~/components/icons/IconProfile'
import IconSearch from '~/components/icons/IconSearch'
import IconSend from '~/components/icons/IconSend'
export default {
  components: {
    IconSearch,
    IconProfile,
    IconPlus,
    IconEmoticon,
    IconDCheck,
    IconBack,
    IconMenu,
    IconSend,
  },
  layout: 'default',
  data() {
    return {
      color: {
        primary: '#7E98DF',
        secondary: '#848484',
        grey: '#FAFAFA',
        white: '#ffffff',
      },
      menuVisible: false,
      userData: {},
      messages: [],
    }
  },
  created() {
    console.log('created running')
    // this.getUserData()
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/index',
      path: '/api2/socket.io',
    })
    this.socket.on('chatMessage', (data) => {
      console.log('ini chat jalan')
      this.messages.push(data)
    })
  },
  methods: {
    showMenu() {
      this.menuVisible = !this.menuVisible
    },
    getUserData() {
      // const data = localStorage?.getItem('user')
      // this.userData = JSON.parse(data)
      // console.log(this.userData)
    },
  },
}
</script>

<style scoped>
[type='text'] {
  @apply bg-grey w-full focus:border-grey border border-grey focus:outline-none py-2;
}
</style>
