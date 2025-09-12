'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function NewsletterForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://mailtik.spacejelly.dev/api/forms/newsletter', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      const result = await response.json();
      
      if (result.success) {
        if (result.redirectUrl) {
          window.location.href = result.redirectUrl;
        } else {
          // If no redirect URL, redirect to same page with success params
          const url = new URL(window.location.href);
          url.searchParams.set('status', 'success');
          if (result.message) {
            url.searchParams.set('message', result.message);
          }
          window.location.href = url.toString();
        }
      } else {
        throw new Error('Failed to post form.');
      }
    } catch (error) {
      // Redirect to same page with error status on network/parsing errors
      const url = new URL(window.location.href);
      url.searchParams.set('status', 'error');
      window.location.href = url.toString();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        autoComplete="off" 
        tabIndex={-1} 
        style={{
          position: "absolute",
          left: "-9999px",
          width: "0",
          height: "0",
          border: "0",
          padding: "0",
          margin: "0",
          overflow: "hidden"
        }} 
        name="phone" 
      />
      <input type="hidden" name="redirect" value="https://www.fullstacknext.dev/" />
      <input type="hidden" name="tags" value="location:fullstacknext.dev" />
      <p className="mb-4">
        <input 
          className="px-4 py-3 border-2 border-slate-400 rounded" 
          name="email" 
          aria-label="Your email address" 
          placeholder="Your email address" 
          required 
          type="email"
          disabled={isLoading}
        />
      </p>
      <p>
        <button 
          type="submit" 
          disabled={isLoading}
          className={`relative inline-flex items-center justify-center gap-2 text-white font-bold px-4 py-3 rounded transition-colors ${
            isLoading 
              ? 'bg-purple-400 cursor-not-allowed' 
              : 'bg-purple-500 hover:bg-purple-600'
          }`}
        >
          <span className={isLoading ? 'invisible' : ''}>
            Get Free Tutorials
          </span>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </button>
      </p>
    </form>
  );
}