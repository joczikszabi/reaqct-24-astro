import { useState } from 'preact/hooks';

export default function AbstractSubmissionForm() {

  return (
    <form class="w-full">
      <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
            for="grid-first-name"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-primary-indigo border rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
            type="text"
            placeholder="First name"
          />
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
            for="grid-last-name"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-primary-indigo border rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Last name"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
            for="grid-email"
          >
            Email
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 border text-primary-indigo border-gray-200 rounded-md py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-email"
            type="text"
            placeholder="Your email address"
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
            for="grid-state"
          >
            Topic
          </label>
          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border text-primary-indigo border-gray-200 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Quantum algorithms & Information</option>
              <option>Quantum Error Correction</option>
              <option>Quantum Software Engineering</option>
              <option>HPC & Quantum Computing</option>
              <option>Quantum Sensing</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
            for="grid-dropzone-file"
          >
            Abstract paper
          </label>
          <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-gray-200 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">PDF (MAX. 10MB)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-full px-3">
          <input checked id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-primary-orange ring-primary-orangee bg-gray-200 border-gray-300 rounded-md focus:ring-primary-orange focus:ring-2"/>
          <label for="checked-checkbox" class="uppercase tracking-wide text-text-normal text-xs font-semibold ms-2">I have read and agree to the{' '}
            <a class="font-semibold text-primary-orange underline" href="#">Terms of Service</a>{' '}
            and{' '}
            <a class="font-semibold text-primary-orange underline" href="#">Privacy Policy</a>
          </label>
        </div>
      </div>
      <button
        class="flex-shrink-0 hover:bg-opacity-5 hover:bg-white border-primary-orange text-sm border-2 text-text-title font-semibold py-2 px-12 rounded-md mt-2"
        type="button"
      >
        Submit
      </button>
    </form>
  )
}