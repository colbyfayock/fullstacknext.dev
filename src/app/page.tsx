import { Youtube, Bell } from 'lucide-react';

import Container from "@/components/Container";
import Video from "@/components/Video";

const YOUTUBE_ID = 'KvIMe69XO00'

export default function Home() {
  return (
    <main>
      <Container>
        <h1 className="text-5xl font-black mt-24 text-center">
          Become a Next.js 15 Pro
        </h1>
        
        <section className="text-center my-24">
          <Video title="Full Stack Next.js 15" src={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`} />

          <ul className="flex items-center justify-center gap-4 mt-12">
            <li>
              <a className="inline-flex items-center gap-2 text-white font-bold bg-blue-500 px-4 py-3 rounded" href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}>
                <Youtube className="w-6 h-auto" />
                Watch on YouTube
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 text-white font-bold bg-slate-700 px-4 py-3 rounded" href="https://www.youtube.com/colbyfayock?sub_confirmation=1">
                <Bell className="w-6 h-auto" />
                Subscribe to Channel
              </a>
            </li>
          </ul>
        </section>          

        <section className="text-center my-24">
          <h2 className="text-3xl font-bold mb-8">
            What You&apos;ll Learn
          </h2>

          <ul className="text-lg space-y-3">
            <li>💻&nbsp;&nbsp;Build a full stack app with Next.js 15 and React 19</li>
            <li>💅&nbsp;&nbsp;Design responsive UI components with Tailwind CSS and shadcn/ui</li>
            <li>💾&nbsp;&nbsp;Manage databases with Xata and Drizzle ORM</li>
            <li>💼&nbsp;&nbsp;Use server actions for form submissions and managing data</li>
            <li>🔐&nbsp;&nbsp;Add authentication with Clerk including social login, MFA, &amp; Passkeys</li>
            <li>👮&nbsp;&nbsp;Implement user and organization-based access control</li>
            <li>💵&nbsp;&nbsp;Process payments using Stripe Checkout</li>
            <li>✉️&nbsp;&nbsp;Create email templates with React</li>
            <li>📬&nbsp;&nbsp;Send transactional emails with Resend</li>
            <li>🚀&nbsp;&nbsp;Deploy a production-ready Next.js application to Vercel</li>
          </ul>

          {/* <p>Headline</p> */}
        </section>

        <section className="flex flex-col items-center">

          <h2 className="text-3xl font-bold mb-8">
            Full Chapter Breakdown
          </h2>

          <div>
            <details>
              <summary className="text-lg font-semibold mb-6">
                0:00:00 - Intro
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  What to expect from the course!
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=0s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                0:01:19 - Create a new Next.js 15 App
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Bootstrap a new Next.js app using Create Next App.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=79s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                0:04:20 - Creating a Dashboard with Tailwind and shadcn/ui
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Use Tailwind CSS and shadcn/ui to create a dashboard that will be used
                  for displaying invoice data.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=260s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                0:25:00 - Adding a new Create Invoice Form
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Create a new custom form for adding new invoices.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=1500s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                0:34:15 - Installing & Configuring Xata & Drizzle ORM
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Set up a new Xata account and configure Drizzle ORM to manage queries and relationships.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=2055s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                0:42:28 - Creating Table Schemas for Invoice Data
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Adding your first database table by writing schemas with Drizzle ORM.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=2548s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                0:49:07 - Generating & Running Migrations with Drizzle Kit
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Using Drizzle Kit to generate migrations for the database schemas and push them to Xata.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=2947s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                0:55:26 - Adding new Invoices with Server Actions
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Create new invoices using React 19 Server Actions.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=3326s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                1:05:07 - Progressively Enhanced Forms in React 19 & Next.js 15
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Allow forms to work both with and without JavaScript, while enhancing
                  the experience when JavaScript is enabled, using React 19 features
                  and Next.js 15 Form component.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=3907s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                1:20:11 - List Invoices in a Data Table
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Query for all invoices to display in a table on the dashboard.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=4811s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                1:28:19 - Dynamic Page Routes for Invoices
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Configure dynamic routes to set up a new page for each invoice.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=5299s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                1:38:24 - Catching & Handling Errors
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Detect when an invoice doesn&apos;t exist or when an invoice ID is invalid
                  and handle the errors gracefully.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=5904s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                1:43:11 - Adding Social Login with Clerk
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Add user login with Google oAuth using Clerk.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=6191s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                1:47:18 - Protecting Routes with Clerk Middleware
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Lock down the app to that only authenticated users
                  can access private pages using Middleware.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=6438s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                1:52:04 - Creating a Page Layout with Site Header & Footer
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Finish off the layout design to add a header and footer
                  which will include the sitewide navigation and user controls.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=6724s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                2:03:46 - Building Login & Signup Pages
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Add your own login and signup pages to avoid having to send
                  people off-site to a Clerk subdomain to log in.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=7426s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                2:07:46 - Custom Login Page with Clerk Elements
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Fully customize a login page and user flow using Clerk Elements.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=7666s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                2:13:51 - Configuring MFA (Multi-Factor Authentication)
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Require users to both enter a password and enter a one time password.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=8031s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                2:21:07 - Setting Up Passwordless Auth with Passkeys
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Give an alternative, passwordless option for login using Passkeys.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=8467s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                2:24:33 - Securing Server Actions with Clerk
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Make sure only authenticated users can trigger server action requests.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=8673s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                2:27:44 - Add New User ID Column to Invoices
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Start to add relationships with invoice data to associate each invoice
                  with an actual user.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=8864s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                2:31:02 - Restricting Invoice Access by User
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Only allow users to see the invoices they created.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=9062s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                2:35:21 - Update Invoice Status
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Allow users to update the status of an invoice manually whether
                  open, paid, or something else.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=9321s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                2:54:10 - Optimistic UI Updates in React 19
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Enhance the UI responsiveness by optimistically updating
                  the invoice status upon change.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=10450s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:03:27 - Deleting Invoices
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Add the option to delete an invoice.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=11007s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:08:15 - Add Confirmation Modal for Deletion
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Prevent accidental deletions and require a confirmation modal
                  to delete an invoice with shadcn/ui.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=11295s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:15:29 - Creating Table Relationships for Customer Details
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Store a customer&apos;s email and name in relation to an invoice in a separate table.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=11729s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:22:11 - Joining Multiple Tables for Customer Data
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Query for both invoices and customer relationship from separate tables.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=12131s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:26:40 - Creating & Managing Organizations
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Setting up and configuring new organizations.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=12400s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:31:39 - Add New Organization ID Column to Invoices
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Add data relationship with Organization ID for querying by organization.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=12699s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:34:40 - Restricting Access by Organization
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Only permit users in an org to see organization-level data.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=12880s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:41:02 - Install & Configure Stripe
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Set up a Stripe account and the Stripe SDK in a Next.js app.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=13262s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:43:58 - Adding a Public Payment Page
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Creatin a new page that will serve as the place people can make payments for invoices.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=13438s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                3:56:29 - Creating Payment Sessions with Stripe Checkout
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Set up a new session to allow clients to make payments using Stripe Checkout.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=14189s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                4:04:36 - Payment State with URL Parameters & Stripe Sessions
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Determine the state of a payment by URL and by looking up a Stripe session.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=14676s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                4:17:02 - Creating Email Templates with React
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Design and create email templates using React Email.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=15422s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                4:25:30 - Sending Transactional Emails with Resend
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Automatically send an email whenever an invoice is created using Resend.
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=15930s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                4:30:22 - Deploy Next.js to Vercel
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  Deploy and publish your new invoice app to the world with Vercel!
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=16222s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-6">
                4:33:51 - Outro
              </summary>
              <div className="-mt-2 mb-8">
                <p className="mt-6 mb-4">
                  What are the next steps?
                </p>
                <p>
                  <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=16431s`} className="flex items-center gap-2 hover:text-blue-500">
                    <Youtube className="w-4 h-auto" />
                    Jump to this chapter!
                  </a>
                </p>
              </div>
            </details>
          </div>
        </section>

        <section className="text-center my-24">
          <h2 className="text-3xl font-bold mb-8">
            Get Weekly Tutorials
          </h2>

        </section>
      </Container>
    </main>
  );
}
