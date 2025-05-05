// Initialize analytics before the app starts
console.log('Analytics initialized')
 
// Set up global error tracking
window.addEventListener('error', (event) => {
  // Send to your error tracking service
  reportError(event.error)
})

/*
以下で新しいanalyticsの使い方を確認しておきます。
https://nextjs.org/docs/app/guides/analytics
*/