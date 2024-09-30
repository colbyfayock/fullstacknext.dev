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
              <a className="inline-block text-white font-bold bg-blue-500 px-4 py-3" href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}`}>
                Watch on YouTube
              </a>
            </li>
            <li>
              <a className="inline-block text-white font-bold bg-slate-700 px-4 py-3" href="https://www.youtube.com/colbyfayock?sub_confirmation=1">
                Subscribe to Channel
              </a>
            </li>
          </ul>
        </section>          

        <section className="text-center my-24">
          <h2 className="text-2xl font-bold mb-8">
            What You&apos;ll Learn
          </h2>

          <ul className="text-lg space-y-2">
            <li>Build a full stack app with Next.js 15 and React 19</li>
            <li>Design responsive UI components with Tailwind CSS and shadcn/ui</li>
            <li>Manage databases with Xata and Drizzle ORM</li>
            <li>Use server actions for form submissions and managing data</li>
            <li>Add authentication with Clerk including social login, MFA, &amp; Passkeys</li>
            <li>Implement user and organization-based access control</li>
            <li>Process payments using Stripe Checkout</li>
            <li>Create email templates with React</li>
            <li>Send transactional emails with Resend</li>
            <li>Deploy a production-ready Next.js application to Vercel</li>
          </ul>

          {/* <p>Headline</p> */}
        </section>

        <section className="flex flex-col items-center">

          <h2 className="text-2xl font-bold mb-8">
            Full Chapter Breakdown
          </h2>

          <div>
            <details>
              <summary className="text-lg font-semibold mb-4">
                0:00:00 - Intro
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=0s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                0:01:19 - Create a new Next.js 15 App
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=79s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                0:04:20 - Creating a Dashboard with Tailwind and shadcn/ui
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=260s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                0:25:00 - Adding a new Create Invoice Form
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=1500s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                0:34:15 - Installing & Configuring Xata & Drizzle ORM
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=2055s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                0:42:28 - Creating Table Schemas for Invoice Data
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=2548s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                0:49:07 - Generating & Running Migrations with Drizzle Kit
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=2947s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                0:55:26 - Adding new Invoices with Server Actions
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=3326s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                1:05:07 - Progressively Enhanced Forms in React 19 & Next.js 15
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=3907s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                1:20:11 - List Invoices in a DataTable
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=4811s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                1:28:19 - Dynamic Page Routes for Invoices
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=5299s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                1:38:24 - Catching & Handling Errors
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=5904s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                1:43:11 - Adding Social Login with Clerk
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=6191s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                1:47:18 - Protecting Routes with Clerk Middleware
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=6438s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                1:52:04 - Creating a Page Layout with Site Header & Footer
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=6724s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                2:03:46 - Building Login & Signup Pages
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=7426s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                2:07:46 - Custom Login Page with Clerk Elements
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=7666s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                2:13:51 - Configuring MFA (Multi-Factor Authentication)
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=8031s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                2:21:07 - Setting Up Passkeys
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=8467s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                2:24:33 - Securing Server Actions with Clerk
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=8673s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                2:27:44 - Add New User ID Column to Invoices
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=8864s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                2:31:02 - Restricting Invoice Access by User
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=9062s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                2:35:21 - Update Invoice Status
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=9321s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                2:54:10 - Optimistic UI Updates in React 19
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=10450s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:03:27 - Deleting Invoices
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=11007s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:08:15 - Add Confirmation Modal for Deletion
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=11295s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:15:29 - Creating Table Relationships for Customer Details
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=11729s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:22:11 - Joining Multiple Tables for Customer Data
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=12131s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:26:40 - Creating & Managing Organizations
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=12400s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:31:39 - Add New Organization ID Column to Invoices
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=12699s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:34:40 - Restricting Access by Organization
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=12880s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:41:02 - Install & Configure Stripe
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=13262s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:43:58 - Adding a Public Payment Page
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=13438s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                3:56:29 - Creating Payment Sessions with Stripe Checkout
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=14189s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                4:04:36 - Payment State with URL Parameters & Stripe Sessions
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=14676s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                4:17:02 - Creating Email Templates with React
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=15422s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                4:25:30 - Sending Transactional Emails with Resend
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=15930s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                4:30:22 - Deploy Next.js to Vercel
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=16222s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>

            <details>
              <summary className="text-lg font-semibold mb-4">
                4:33:51 - Outro
              </summary>
              <p className="-mt-2 mb-6">
                <a href={`https://www.youtube.com/watch?v=${YOUTUBE_ID}&t=16431s`}>
                  Jump to this chapter!
                </a>
              </p>
            </details>
          </div>
        </section>

        <section className="text-center my-24">
          <h2 className="text-2xl font-bold mb-8">
            Get Weekly Tutorials
          </h2>

        </section>
      </Container>
    </main>
  );
}
