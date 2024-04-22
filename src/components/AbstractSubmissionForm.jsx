import React, { useState, useEffect } from 'react';
import { FileInput, Label } from 'flowbite-react';

export default function AbstractSubmissionForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: 'Quantum Algorithms & Information'
  });

  const [abstractFile, setAbstractFile] = React.useState(null);
  const [presentationType, setPresentationType] = React.useState('oral');
  const [isChecked, setChecked] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isError, setIsError] = React.useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePresentationTypeChange = (e) => {
    setPresentationType(e.target.value);
  }

  function handleFileChange(e) {
    setAbstractFile(e.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError(formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.topic === '' || abstractFile == null);
  }

  useEffect(() => {
    if (isError == true || isError == null) {
      return;
    }

    const postData = new FormData();
    postData.append('firstName', formData.firstName);
    postData.append('lastName', formData.lastName);
    postData.append('email', formData.email);
    postData.append('topic', formData.topic);
    postData.append('presentationType', presentationType);
    postData.append('isTermsAccepted', isChecked);
    postData.append('abstractFile', abstractFile)

    setIsSubmitted(true);

    fetch('https://reaqct24-backend.azurewebsites.net/api/abstract', {
      method: 'POST',
      body: postData,
    })
  }, [isError]);

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
            <div class="flex flex-wrap -mx-3 mb-6 relative">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className={"appearance-none block w-full text-primary-indigo border rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " + (isError && formData.firstName === '' ? 'bg-red-200' : 'bg-gray-200')}
                  id="grid-first-name"
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {isError && formData.firstName === '' &&
                  <p class="text-xs text-red-600 mt-1 absolute -bottom-5">Required</p>
                }
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className={"appearance-none block w-full text-primary-indigo border rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " + (isError && formData.lastName === '' ? 'bg-red-200' : 'bg-gray-200')}
                  id="grid-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {isError && formData.lastName === '' &&
                  <p class="text-xs text-red-600 mt-1 absolute -bottom-5">Required</p>
                }
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 relative">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
                  for="grid-email"
                >
                  Email
                </label>
                <input
                  className={"appearance-none block w-full text-primary-indigo border rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " + (isError && formData.email === '' ? 'bg-red-200' : 'bg-gray-200')}
                  id="grid-email"
                  name="email"
                  type="text"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {isError && formData.email === '' &&
                  <p class="text-xs text-red-600 mt-1 absolute -bottom-5">Required</p>
                }
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4 relative">
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
                    <option>Quantum Algorithms & Information</option>
                    <option>Quantum Error Correction</option>
                    <option>Quantum Software Engineering</option>
                    <option>HPC & Quantum Computing</option>
                    <option>Quantum Sensing</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6 relative">
              <div class="w-full flex flex-col px-3">
                <label
                  class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
                  for="file_input">
                    Presentation type
                </label>
                <div class="flex flex-row">
                  <div class="flex items-center w-full rounded">
                    <input checked id="presentation-type-oral" type="radio" value="oral" name="presentation-type" class="w-4 h-4 text-primary-orange bg-gray-100 border-gray-300 focus:ring-primary-orange"
                      onChange={handlePresentationTypeChange}
                      checked={presentationType === 'oral'}
                    />
                    <label for="presentation-type-oral" class="w-full ms-2 text-sm font-medium text-text-normal">Oral presentation</label>
                  </div>
                  <div class="flex items-center w-full rounded">
                    <input id="presentation-type-poster" type="radio" value="poster" name="presentation-type" class="w-4 h-4 text-primary-orange bg-gray-100 border-gray-300 focus:ring-primary-orange"
                      onChange={handlePresentationTypeChange}
                      checked={presentationType === 'poster'}
                    />
                    <label for="presentation-type-poster" class="w-full ms-2 text-sm font-medium text-text-normal">Poster presentation</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4 relative">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
                  for="file_input">
                    Abstract paper
                </label>
                <input 
                  className={"appearance-none block w-full text-primary-indigo border rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " + (isError && abstractFile === null ? 'bg-red-200' : 'bg-gray-200')}
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}/>
                <p class="mt-1 text-xs text-gray-400" id="file_input_help">PDF (MAX. 10MB).</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4 relative">
            <div class="w-full px-3">
                <input
                  class="w-4 h-4 text-primary-orange ring-primary-orangee bg-gray-200 border-gray-300 rounded-md focus:ring-primary-orange focus:ring-2"
                  id="checked-checkbox" 
                  type="checkbox" 
                  name="isTermsAccepted"
                  defaultChecked={isChecked}
                  onChange={() => setChecked((state) => !state)} />
                <label for="checked-checkbox" class="text-text-title text-sm ms-2">I have read and agree to the{' '}
                  <a class="font-semibold text-primary-orange underline" target="_blank" href="https://drive.google.com/file/d/1iH66hHklgCjXnMGMJXtwTYhXtD42t_-J/view?usp=sharing">Privacy Policy</a>
                </label>
              </div>
            </div>
            <button
              className={"flex-shrink-0 hover:bg-opacity-5 hover:bg-white border-primary-orange text-sm border-[1px] text-primary-orange font-medium py-2 px-6 rounded-md mt-2 " + (isChecked ? '' : 'opacity-50')}
              type="submit"
              disabled={!isChecked}
            >
              Submit your abstract
            </button>
            {
              isError &&
              <p class="text-sm text-red-600 mt-2">Please fill all the fields.</p>
            }
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
              We're glad that you've chosen to submit your abstract to the <span class="font-semibold text-primary-orange">ReAQCT 2024</span> conference.
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