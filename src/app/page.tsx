import { Youtube, Bell } from 'lucide-react';

import Container from "@/components/Container";
import Video from "@/components/Video";

const YOUTUBE_ID = 'Mcw8Mp8PYUE'

export default function Home() {
  return (
    <main>
      <Container>
        <section className="max-w-3xl my-32 mx-auto">
          <h1 className="text-5xl font-black mt-24 text-center mb-12">
            Become a <span className="underline underline-offset-4 decoration-purple-500 decoration-4">Next.js 15 Pro</span>
          </h1>

          <p className="text-xl text-center mb-12">
            Next.js is the leading framework for building powerful apps for the web,
            but with great power comes <span className="line-through">great responsibility</span> the
            need to fully understand how those APIs can help you solve whatever problem you&apos;re set up to tackle.
          </p>

          <p className="text-xl text-center mb-6">
            This course walks you through everything you need to build a full
            stack <strong className="text-nowrap">Next.js 15</strong> and <strong className="text-nowrap">React 19</strong> app
            complete with authentication, database management, transactional emails,
            payments, and everything inbetween.
          </p>

          <p className="text-xl text-center mb-6">
            <a href="#video" className="underline underline-offset-4 decoration-purple-500 decoration-4">
              <strong>
                Let&apos;s dig in!
              </strong>
            </a>
          </p>
        </section>
        
        <section id="video" className="text-center my-32">
          <Video title="Full Stack Next.js 15" src={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`} />

          <ul className="flex items-center justify-center gap-4 mt-12">
            <li>
              <a className="inline-flex items-center gap-2 text-white font-bold bg-purple-500 px-4 py-3 rounded" href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}>
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

        <section className="text-center my-32">
          <h2 className="text-3xl font-black mb-12">
            What You&apos;ll Learn
          </h2>

          <ul className="text-lg space-y-3 mb-12">
            <li>💻&nbsp;&nbsp;Build a full stack app with Next.js 15 and React 19</li>
            <li>💅&nbsp;&nbsp;Design responsive UI components with Tailwind CSS and shadcn/ui</li>
            <li>💾&nbsp;&nbsp;Manage databases with <a className="underline hover:text-blue-600" href="https://spacejelly.dev/xata">Xata</a> and Drizzle ORM</li>
            <li>💼&nbsp;&nbsp;Use server actions for form submissions and managing data</li>
            <li>🔐&nbsp;&nbsp;Add authentication with <a className="underline hover:text-blue-600" href="https://spacejelly.dev/clerk">Clerk</a> including social login, MFA, &amp; Passkeys</li>
            <li>👮&nbsp;&nbsp;Implement user and organization-based access control</li>
            <li>💵&nbsp;&nbsp;Process payments using Stripe Checkout</li>
            <li>✉️&nbsp;&nbsp;Create email templates with React</li>
            <li>📬&nbsp;&nbsp;Send transactional emails with Resend</li>
            <li>🚀&nbsp;&nbsp;Deploy a production-ready Next.js application to Vercel</li>
          </ul>

          <p className="text-2xl font-bold">
            <a href="#video" className="underline underline-offset-4 decoration-purple-500 decoration-4">Get started</a> building your next full stack app!
          </p>
        </section>

        <section className="max-w-3xl mx-auto">

          <h2 className="text-3xl text-center font-black mb-12">
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

        <section className="text-center my-32">
          <h2 className="text-3xl font-black mb-12">
            Sponsors
          </h2>

          <form action="https://app.convertkit.com/forms/7181383/subscriptions" method="post">
            <p className="text-xl mb-12">
              This <strong>free</strong> course was brought to you by...
            </p>

            <ul className="flex items-center gap-8 justify-center">
              <li>
                <a href="https://spacejelly.dev/xata">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="173"
                    height="50"
                    fill="none"
                    viewBox="0 0 173 50"
                  >
                    <title>Xata</title>
                    <path
                      fill="#000"
                      d="M87.714 16.335c.714.653 1.165 1.228 1.353 1.727.226.499.226 1.017 0 1.554-.188.499-.601 1.113-1.24 1.841l-17.88 21.121c-.64.69-1.204 1.151-1.693 1.381-.488.27-.977.307-1.466.116-.451-.192-.996-.557-1.636-1.094-.639-.652-1.071-1.208-1.297-1.669-.226-.498-.226-1.016 0-1.554.263-.537.696-1.15 1.297-1.841l17.88-21.121c.94-1.036 1.711-1.592 2.313-1.669.639-.077 1.429.326 2.369 1.208zm-22.505 0c.639-.575 1.184-.94 1.635-1.093a1.668 1.668 0 011.41.173c.49.23 1.034.69 1.636 1.38l17.88 21.122c.64.69 1.072 1.304 1.297 1.841.226.538.245 1.055.057 1.554-.188.46-.64 1.017-1.354 1.67-.64.575-1.203.94-1.692 1.093-.451.191-.921.153-1.41-.116-.451-.23-1.015-.69-1.692-1.38l-17.88-21.122c-.602-.69-1.015-1.304-1.241-1.841-.226-.537-.226-1.055 0-1.554.226-.537.677-1.113 1.354-1.727zm50.001 27.452c-1.091 0-1.899-.211-2.425-.633-.527-.422-.79-.998-.79-1.727l.395-1.899c-.301.499-.809 1.094-1.523 1.784-.715.653-1.655 1.247-2.82 1.784-1.166.499-2.576.748-4.23.748-1.768 0-3.441-.364-5.02-1.093a14.139 14.139 0 01-4.118-3.108 16.975 16.975 0 01-2.82-4.546c-.677-1.727-1.015-3.568-1.015-5.525 0-1.88.338-3.645 1.015-5.295a15.433 15.433 0 012.877-4.489 13.307 13.307 0 014.117-3.05 11.22 11.22 0 014.964-1.15c1.541 0 2.838.21 3.891.632 1.091.422 2.012.96 2.764 1.612.752.614 1.373 1.266 1.861 1.956l-.338-1.669c0-.843.263-1.477.79-1.899.526-.46 1.353-.69 2.482-.69 1.053 0 1.804.173 2.255.518.452.307.734.748.847 1.323.113.538.169 1.151.169 1.842v21.063c0 .653-.056 1.247-.169 1.784-.113.538-.414.96-.903 1.266-.451.307-1.203.46-2.256.46zm-10.378-6.676c1.278 0 2.425-.326 3.44-.978 1.016-.653 1.824-1.535 2.426-2.648.639-1.15.959-2.417.959-3.798 0-1.496-.32-2.8-.959-3.913s-1.486-1.976-2.538-2.59c-1.016-.652-2.163-.978-3.441-.978-1.391 0-2.632.345-3.723 1.035-1.09.653-1.955 1.554-2.594 2.705-.602 1.113-.903 2.38-.903 3.799 0 1.38.32 2.628.96 3.74a7.225 7.225 0 002.594 2.648c1.128.652 2.388.978 3.779.978zm33.071 6.79c-1.842 0-3.422-.19-4.738-.575-1.315-.383-2.388-.978-3.214-1.784-.829-.805-1.449-1.841-1.862-3.107-.375-1.305-.565-2.84-.565-4.604V9.43c0-.691.057-1.286.17-1.785.151-.498.452-.882.903-1.15.489-.307 1.24-.46 2.255-.46 1.054 0 1.806.153 2.257.46.489.306.79.728.903 1.266.15.498.225 1.055.225 1.669V33.6c0 .806.056 1.459.169 1.957.15.499.358.883.62 1.151.301.23.677.403 1.128.518.489.077 1.073.115 1.749.115.714 0 1.316.058 1.805.173.527.115.921.403 1.184.863.263.422.396 1.132.396 2.13 0 1.074-.17 1.86-.509 2.36-.299.46-.713.747-1.241.862a7.135 7.135 0 01-1.635.173zm-12.691-27.796l5.81.058 7.783-.23c.64 0 1.204.076 1.693.23.526.115.94.422 1.241.92.301.461.45 1.228.45 2.303 0 .997-.149 1.745-.45 2.244-.301.499-.696.825-1.185.979a7.423 7.423 0 01-1.692.172l-7.558-.115-6.261.058c-.94-.039-1.598-.307-1.974-.806-.338-.537-.508-1.4-.508-2.59 0-1.113.207-1.918.621-2.417.451-.537 1.127-.806 2.03-.806zm44.309 27.682c-1.091 0-1.899-.211-2.426-.633-.526-.422-.789-.998-.789-1.727l.394-1.899c-.301.499-.808 1.094-1.523 1.784-.714.653-1.655 1.247-2.819 1.784-1.166.499-2.576.748-4.231.748-1.768 0-3.441-.364-5.019-1.093a14.12 14.12 0 01-4.118-3.108 16.985 16.985 0 01-2.821-4.546c-.677-1.727-1.014-3.568-1.014-5.525 0-1.88.337-3.645 1.014-5.295a15.432 15.432 0 012.877-4.489 13.3 13.3 0 014.117-3.05 11.224 11.224 0 014.964-1.15c1.542 0 2.839.21 3.892.632 1.091.422 2.012.96 2.764 1.612.751.614 1.372 1.266 1.861 1.956l-.338-1.669c0-.843.263-1.477.789-1.899.527-.46 1.353-.69 2.482-.69 1.053 0 1.805.173 2.256.518.452.307.733.748.846 1.323.113.538.17 1.151.17 1.842v21.063c0 .653-.057 1.247-.17 1.784-.113.538-.414.96-.903 1.266-.451.307-1.202.46-2.255.46zm-10.379-6.676c1.278 0 2.426-.326 3.441-.978 1.015-.653 1.824-1.535 2.426-2.648.639-1.15.958-2.417.958-3.798 0-1.496-.319-2.8-.958-3.913-.64-1.113-1.487-1.976-2.54-2.59-1.014-.652-2.162-.978-3.439-.978-1.392 0-2.633.345-3.724 1.035-1.089.653-1.954 1.554-2.594 2.705-.602 1.113-.902 2.38-.902 3.799 0 1.38.32 2.628.958 3.74a7.222 7.222 0 002.595 2.648c1.128.652 2.388.978 3.779.978z"
                    ></path>
                    <path
                      fill="url(#paint0_linear_5_174)"
                      d="M.279 12.568a18.764 18.764 0 005.52 13.269L18.32 38.313c.434.432 1.139.433 1.545-.025a18.763 18.763 0 00-.79-25.744L7.634 1.146C6.605.118 4.917.11 4.043 1.274A18.76 18.76 0 00.28 12.568z"
                    ></path>
                    <path
                      fill="url(#paint1_linear_5_174)"
                      d="M45.07 25.762A18.764 18.764 0 0046.828 1.2C45.953.036 44.266.044 43.235 1.07L31.797 12.469a18.764 18.764 0 00-5.522 13.27 18.763 18.763 0 004.73 12.474c.407.458 1.111.457 1.545.025l12.52-12.476z"
                    ></path>
                    <path
                      fill="url(#paint2_linear_5_174)"
                      d="M40.968 48.25c1.03 1.03 2.711 1.04 3.631-.088 2.547-3.124 4.242-6.727 4.796-10.272.606-3.872-.195-7.39-2.232-9.934-.382-.478-1.09-.476-1.523-.043L33.904 39.606a1.11 1.11 0 00-.002 1.57l7.065 7.074z"
                    ></path>
                    <path
                      fill="url(#paint3_linear_5_174)"
                      d="M6.271 48.239c.92 1.128 2.603 1.118 3.631.088l7.066-7.073a1.11 1.11 0 00-.002-1.57L5.23 27.99c-.434-.433-1.141-.435-1.524.043-2.036 2.545-2.837 6.062-2.232 9.934.554 3.545 2.25 7.148 4.796 10.272z"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_5_174"
                        x1="25.435"
                        x2="25.435"
                        y1="0.313"
                        y2="39.034"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9F87FF"></stop>
                        <stop offset="1" stopColor="#8566FF"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_5_174"
                        x1="25.435"
                        x2="25.435"
                        y1="0.313"
                        y2="39.034"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9F87FF"></stop>
                        <stop offset="1" stopColor="#8566FF"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_5_174"
                        x1="25.435"
                        x2="25.435"
                        y1="27.112"
                        y2="49.016"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DE99F6"></stop>
                        <stop offset="1" stopColor="#D669FC"></stop>
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_5_174"
                        x1="25.435"
                        x2="25.435"
                        y1="27.112"
                        y2="49.016"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#DE99F6"></stop>
                        <stop offset="1" stopColor="#D669FC"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://spacejelly.dev/clerk">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="162"
                    height="48"
                    fill="none"
                    viewBox="0 0 162 48"
                  >
                    <title>Clerk</title>
                    <path
                      fill="#9785FF"
                      d="M23.455 31.637c4.048 0 7.33-3.28 7.33-7.325a7.327 7.327 0 00-7.33-7.324 7.327 7.327 0 00-7.33 7.325 7.327 7.327 0 007.33 7.324zM36.661 41.654c.624.623.561 1.654-.172 2.145a23.356 23.356 0 01-13.036 3.95 23.357 23.357 0 01-13.036-3.95c-.733-.49-.795-1.522-.172-2.145l5.357-5.353c.484-.484 1.235-.56 1.844-.248a13.144 13.144 0 006.007 1.443c2.164 0 4.206-.52 6.007-1.443.61-.312 1.36-.236 1.845.248l5.356 5.353z"
                    ></path>
                    <path
                      fill="#9785FF"
                      d="M36.49 4.826c.733.49.796 1.522.172 2.145l-5.356 5.352c-.484.484-1.235.56-1.845.249a13.145 13.145 0 00-6.007-1.443c-7.286 0-13.193 5.902-13.193 13.184 0 2.162.521 4.202 1.444 6.002.312.61.236 1.36-.248 1.843L6.1 37.511c-.623.623-1.656.56-2.146-.172A23.316 23.316 0 010 24.313C0 11.367 10.5.875 23.454.875c4.825 0 9.309 1.455 13.037 3.95z"
                      opacity="0.6"
                    ></path>
                    <path
                      fill="#000"
                      fillRule="evenodd"
                      d="M147.185 32.001a.12.12 0 01.088-.037c.041 0 .077.02.099.056l6.952 11.163a.366.366 0 00.31.172h6.25a.367.367 0 00.312-.559l-9.537-15.374a.367.367 0 01.041-.44l9.186-10.128a.366.366 0 00-.271-.613h-6.519c-.102 0-.2.043-.269.119l-10.631 11.579a.366.366 0 01-.636-.248V5.636a.367.367 0 00-.367-.366h-5.497a.366.366 0 00-.366.366v37.353c0 .203.164.367.366.367h5.497a.367.367 0 00.367-.367v-5.878c0-.092.035-.181.098-.25l4.527-4.86zM76.595 5.636c0-.203.163-.366.365-.366h5.498c.202 0 .366.163.366.366v37.353a.366.366 0 01-.367.367h-5.496a.366.366 0 01-.367-.367V5.636zm-7.759 29.796a.378.378 0 00-.504.016 9.646 9.646 0 01-2.96 1.906 9.808 9.808 0 01-3.811.732 8.257 8.257 0 01-3.232-.555 8.115 8.115 0 01-2.74-1.763c-1.42-1.447-2.236-3.514-2.236-5.977 0-4.931 3.283-8.304 8.208-8.304 1.32-.018 2.63.249 3.832.782a8.971 8.971 0 012.881 2.034c.14.147.37.164.522.031l3.711-3.208a.358.358 0 00.037-.51C69.752 17.5 65.379 15.89 61.22 15.89c-8.373 0-14.31 5.644-14.31 13.948 0 4.107 1.475 7.565 3.964 10.007 2.488 2.442 6.033 3.877 10.124 3.877 5.129 0 9.257-1.966 11.677-4.487a.356.356 0 00-.029-.517l-3.81-3.286zm44.27-3.813a.362.362 0 01-.361.32H93.488a.354.354 0 00-.347.443c.958 3.549 3.814 5.696 7.713 5.696a8.683 8.683 0 003.807-.79 8.537 8.537 0 002.887-2.16.269.269 0 01.375-.034l3.872 3.368a.357.357 0 01.041.502c-2.337 2.755-6.124 4.758-11.321 4.758-7.995 0-14.026-5.533-14.026-13.939 0-4.123 1.42-7.581 3.789-10.023a13.115 13.115 0 014.402-2.912c1.655-.665 3.43-.99 5.218-.956 8.103 0 13.343 5.695 13.343 13.558-.01.725-.055 1.449-.135 2.169zm-19.85-5.104a.35.35 0 00.343.447h12.804a.354.354 0 00.346-.45c-.873-3.018-3.087-5.032-6.525-5.032a7.143 7.143 0 00-2.951.537 7.035 7.035 0 00-2.455 1.696 7.509 7.509 0 00-1.562 2.802zm39.038-10.621a.367.367 0 01.371.366v6.15a.367.367 0 01-.394.366 24.025 24.025 0 00-1.524-.082c-4.795 0-7.611 3.373-7.611 7.8v12.495a.366.366 0 01-.366.367h-5.497a.366.366 0 01-.367-.367V16.64c0-.202.164-.366.367-.366h5.497c.202 0 .366.164.366.366v3.698c0 .021.017.038.038.038a.04.04 0 00.031-.015c2.148-2.868 5.32-4.463 8.671-4.463l.418-.004z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </form>

        </section>

        <section className="text-center my-32">
          <h2 className="text-3xl font-black mb-12">
            Get Weekly Tutorials
          </h2>

          <form action="https://app.convertkit.com/forms/7181383/subscriptions" method="post">
            <p className="mb-4">
              <input className="px-4 py-3 border-2 border-slate-400 rounded" name="email_address" aria-label="Your email address" placeholder="Your email address" required type="email" />
            </p>
            <p>
              <button className="inline-flex items-center gap-2 text-white font-bold bg-purple-500 px-4 py-3 rounded">
                Get Free Tutorials
              </button>
            </p>
          </form>

        </section>
      </Container>
    </main>
  );
}
