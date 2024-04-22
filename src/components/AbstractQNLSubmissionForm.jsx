import React, { useState, useEffect } from 'react';
import { FileInput, Label } from 'flowbite-react';

export default function AbstractSubmissionForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    affiliation: '',
    posterName: '',
  });

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError(formData.firstName === '' || formData.lastName === '' || formData.email === '' || formData.affiliation === '' || formData.posterName == '');
  }

  useEffect(() => {
    if (isError == true || isError == null) {
      return;
    }

    setIsSubmitted(true);

    console.log(isChecked)

    fetch('https://reaqct24-backend.azurewebsites.net/api/abstract/qnl', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      body: JSON.stringify({
        'firstName': formData.firstName,
        'lastName': formData.lastName,
        'email': formData.email,
        'affiliation': formData.affiliation,
        'posterName': formData.posterName,
        'isTermsAccepted': true,
      }),
    })
  }, [isError]);

  return (
    <div>
      { !isSubmitted &&
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-2">
            <h1 class="text-xl font-semibold text-text-title">
              Abstract submission for QNL members
            </h1>
            <div class="text-justify text-sm">
              This submission form is made only for QNL members. If you are not a QNL member, please submit your abstract{' '}
              <a
                class="font-medium text-primary-orange underline"
                href="/submit">here</a>. <br/><br/> After submission, do not forget to register for the conference at<br/> <a
                class="font-medium text-primary-orange underline"
                href="https://e-conf.com/reaqct2024/registration/"
                target="_blank">https://e-conf.com/reaqct2024/registration/</a>
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
            <div class="flex flex-wrap -mx-3 mb-6 relative">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-text-normal text-xs font-semibold mb-2"
                  for="grid-email"
                >
                  Affiliation
                </label>
                <input
                  className={"appearance-none block w-full text-primary-indigo border rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " + (isError && formData.email === '' ? 'bg-red-200' : 'bg-gray-200')}
                  id="grid-affiliation"
                  name="affiliation"
                  type="text"
                  placeholder="Your affiliation"
                  value={formData.affiliation}
                  onChange={handleInputChange}
                />
                {isError && formData.affiliation === '' &&
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
                  Poster name
                </label>
                <input
                  className={"appearance-none block w-full text-primary-indigo border rounded-md py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 " + (isError && formData.email === '' ? 'bg-red-200' : 'bg-gray-200')}
                  id="grid-poster-name"
                  name="posterName"
                  type="text"
                  placeholder="Name of your poster"
                  value={formData.posterName}
                  onChange={handleInputChange}
                />
                {isError && formData.posterName === '' &&
                  <p class="text-xs text-red-600 mt-1 absolute -bottom-5">Required</p>
                }
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
            <p class="mb-4">
              A confirmation email will be sent to your email address shortly. If you do not receive the confirmation email within 
              the next 24 hours, please reach out to us at <span class="font-semibold text-primary-orange">contact@reaqct.org</span>.
            </p>
            <p>
              Do not forget to register for the conference at<br/> <a
                class="font-medium text-primary-orange underline"
                href="https://e-conf.com/reaqct2024/registration/"
                target="_blank">https://e-conf.com/reaqct2024/registration/</a>
            </p>
          </div>
        </div>
      }
    </div>
  )
}