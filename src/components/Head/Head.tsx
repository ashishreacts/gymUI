import { APP_NAME } from "@/config";
import { Helmet } from "react-helmet-async";

type HeadProps = {
  title?: string;
  description?: string;
};

/**
 * Head Component
 *
 * Component used to manage document head properties like title and description dynamically.
 * Uses the react-helmet-async library to update the head of the webpage.
 *
 * @param {Object} props - The properties for the Head component.
 * @param {string} [props.title=''] - The title for the webpage. Defaults to an empty string.
 * @param {string} [props.description=''] - The description for the webpage. Defaults to an empty string.
 *
 * @example
 *
 * // Usage in a React component:
 *
 * import React from 'react';
 * import { Head } from './Head';
 *
 * const MyPage = () => {
 *   return (
 *     <div>
 *       <Head title="My Page Title" description="Description of my page" />
 *       {/* Rest of the page content * /}
 *     </div>
 *   );
 * };
 *
 * export default MyPage;
 */
export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    <Helmet
      title={title ? `${title} | ${APP_NAME}` : undefined}
      defaultTitle={`${APP_NAME}`}
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
