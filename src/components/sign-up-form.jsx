import { Field, Form, Formik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
          <Formik
            initialValues={{
              email: location.state,
              name: "",
              mobilenumber: "",
              typeOfAccount: "",
              purpose: "",
            }}
            onSubmit={(values) => {
          
              console.log(values);
              navigate('/User', { state: values.name })
            }}
          >
            <Form>
              <div className="sign-up">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white py-4">
                  Fill Your Details
                </h1>

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email address"
                  className="bg-gray-50  mb-[10px] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className="mb-[10px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter name"
                  required=""
                />
                <Field
                  type="text"
                  name="mobilenumber"
                  id="mobilenumber"
                  className="mb-[10px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter mobile number"
                  required=""
                />
                <Field
                  type="text"
                  name="typeOfAccount"
                  id="typeOfAccount"
                  className="mb-[10px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Business/Personal Account"
                  required=""
                />
                <Field
                  type="text"
                  name="purpose"
                  id="purpose"
                  className="mb-[10px] bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Purpose"
                  required=""
                />
                <button
                  className="w-full bg-blue-700 text-white  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
