import React, { useState, useRef } from 'react';
import { FileInput, Label } from 'flowbite-react';

export default function AbstractSubmissionForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: ''
  });

  const [abstractFile, setAbstractFile] = useState();
  const [checked, setChecked] = React.useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  function handleFileChange(e) {
    setAbstractFile(e.target.files[0]);
    console.log(abstractFile)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const postData = new FormData();
    postData.append('firstName', formData.firstName);
    postData.append('lastName', formData.lastName);
    postData.append('email', formData.email);
    postData.append('topic', formData.topic);
    postData.append('isTermsAccepted', checked);
    postData.append('abstractFile', abstractFile)

    fetch('reaqct24-backend.azurewebsites.net/api/abstract', {
      method: 'POST',
      body: postData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form class="w-full" onSubmit={handleSubmit}>
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
            name="firstName"
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleInputChange}
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
            name="lastName"
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleInputChange}
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
            name="email"
            type="text"
            placeholder="Your email address"
            value={formData.email}
            onChange={handleInputChange}
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
              class="mb-3 block appearance-none w-full bg-gray-200 border border-gray-200 text-primary-indigo  py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
            >
              <option>Quantum algorithms & Information</option>
              <option>Quantum Error Correction</option>
              <option>Quantum Software Engineering</option>
              <option>HPC & Quantum Computing</option>
              <option>Quantum Sensing</option>
              <option>Other</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-4">
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
            for="file_input">
              Abstract paper
          </label>
          <input 
            class="block w-full bg-gray-200 border text-primary-indigo border-gray-200 rounded-md mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
            onChange={handleFileChange}/>
          <p class="mt-1 text-xs text-gray-400" id="file_input_help">PDF (MAX. 10Mb).</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-4">
      <div class="w-full px-3">
          <input
            class="w-4 h-4 text-primary-orange ring-primary-orangee bg-gray-200 border-gray-300 rounded-md focus:ring-primary-orange focus:ring-2"
            id="checked-checkbox" 
            type="checkbox" 
            name="isTermsAccepted"
            defaultChecked={checked}
            onChange={() => setChecked((state) => !state)} />
          <label for="checked-checkbox" class="text-text-title text-sm ms-2">I have read and agree to the{' '}
            <a class="font-semibold text-primary-orange underline" href="#">Terms of Service</a>{' '}
            and{' '}
            <a class="font-semibold text-primary-orange underline" href="#">Privacy Policy</a>
          </label>
        </div>
      </div>
      <button
        class="flex-shrink-0 hover:bg-opacity-5 hover:bg-white border-primary-orange text-sm border-[2px] text-text-normal hover:text-text-title font-semibold py-2 px-6 rounded-md mt-2"
        type="submit"
      >
        Submit your abstract
      </button>
    </form>
  )
}