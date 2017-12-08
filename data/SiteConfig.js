module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Ben Newton", // Site title.
  siteTitleAlt: "Ben Newton", // Alternative site title for SEO.
  siteLogo: "/logos/ben.png", // Logo used for SEO and manifest.
  siteUrl: "https://benenewton.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A GatsbyJS stater with Material design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-5757336-7", // Tracking code ID for google analytics.
  disqusShortname: "bens-blog-2", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Ben Newton", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Ft. Lauderdale, FL", // User location to display in the author segment.
  userAvatar: "/logos/ben.png", // User avatar to display in the author segment.
  userDescription:
    "I have been building interactive websites for more than 20 years. I have architected and built, from the ground up, web applications that have run warehouse operations and business operations for a large multimillion dollar distribution business for over 12 years. I've built full featured e-commerce sites for both B2B and B2C businesses. More recently, I have specialized in building and leading teams developing high traffic, consumer facing websites for major cruise lines, rental car companies, resorts, airlines and major retailers.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
      {
        label: "Instagram",
        url: "https://instagram.com/bennewton999",
        iconClassName: "fa fa-instagram"
      },
      {
        label: "Twitter",
        url: "https://twitter.com/BenENewton",
        iconClassName: "fa fa-twitter"
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/bennewton/",
        iconClassName: "fa fa-linkedin"
      },
      {
        label: "Email",
        url: "mailto:bennewton999@gmail.com",
        iconClassName: "fa fa-envelope"
      }
  ],
  copyright: "Copyright © 2017. Ben Newton" // Copyright string for the footer of the website and RSS feed.
};
