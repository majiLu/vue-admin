<script setup lang="ts"></script>
<template>
  <div class="h-screen flex justify-center items-center">
    <div class="bg-white p-8 rounded-md shadow-md w-full max-w-md space-y-6 animate__animated animate__fadeIn">
      <h2 class="text-2xl font-bold text-center text-gray-800">登录</h2>
      <form>
        <div class="space-y-4">
          <div>
            <!-- <label for="email" class="block text-sm font-medium text-gray-700">邮箱</label> -->
            <input type="email" id="email"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="请输入你的邮箱">
          </div>
          <div>
            <!-- <label for="password" class="block text-sm font-medium text-gray-700">密码</label> -->
            <input type="password" id="password"
              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="请输入你的密码">
          </div>
        </div>
        <div class="flex items-center justify-between my-1">
          <div class="flex items-center">
            <input id="remember-me" type="checkbox"
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">记住我</label>
          </div>
          <a href="#" class="text-sm text-blue-600 hover:text-blue-500">忘记密码?</a>
        </div>
        <button type="submit"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">登录</button>
      </form>
      <div class="text-center text-sm text-gray-600">
        还没有账号? <a href="#" class="text-blue-600 hover:text-blue-500">注册</a>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped></style>