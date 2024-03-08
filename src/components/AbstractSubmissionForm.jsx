import React, { useState, useRef } from 'react';
import { FileInput, Label } from 'flowbite-react';

export default function AbstractSubmissionForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
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

    setIsSubmitted(true);

    fetch('https://reaqct24-backend.azurewebsites.net/api/abstract', {
      method: 'POST',
      body: postData,
    })
  };

  return (
    <div>
      { !isSubmitted &&
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <h1 class="text-xl font-semibold text-text-title">
              Abstract submission
            </h1>
            <div class="text-justify text-sm">
              Only a single-page abstract is to be submitted for oral or poster
              presentation with reference to the authors’ manuscript or published
              paper (if any). Please use the{' '}
              <a
                class="font-medium text-primary-orange underline"
                href="https://docs.google.com/document/d/1x0HG_z1iQk3OV4Jo9I1NadBMvcGzlsqc/edit?usp=drive_link&ouid=115235549596899931776&rtpof=true&sd=true"
                target="_blank">Word</a> or{' '}
              <a
                class="font-medium text-primary-orange underline"
                href="https://drive.google.com/file/d/1aH-E9S-aZJFx8iwEXVNe7vfKlu8uxuC6/view?usp=drive_link"
                target="_blank">LaTeX</a> templates for preparing the abstract.
            </div>
          </div>
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
                  class="block w-full bg-gray-200 border text-primary-indigo border-gray-500 rounded-md mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  accept="application/pdf"
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
        </div>
      }
      {
        isSubmitted &&
        <div class="flex flex-col gap-8">
          <div class="flex flex-col text-center">
            <h1 class="text-xl font-semibold text-text-title mb-8">
              Thank you for your submission!
            </h1>
            <p class="mb-4">
              We're glad that you've chosen to participate in the <span class="font-semibold text-primary-orange">ReAQCT 2024</span> conference.
            </p>
            <p>
              A confirmation email will be sent to your email address shortly. If you do not receive the confirmation email within 
              the next 24 hours, please reach out to us at <span class="font-semibold text-primary-orange">contact@reaqct.org</span>.
            </p>
          </div>
        </div>
      }
    </div>
  )
}