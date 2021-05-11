import React from "react"

import {
  SocialMediaSectionContainer,
  SocialMediaContainer,
  SocialTitle,
} from "./social-media-styles"

const SocialMedia = ({ instaPostId, facebookPageName, title }) => {
  const IgEmbedLink = `https://www.instagram.com/p/${instaPostId}/embed`

  return (
    <SocialMediaSectionContainer>
      <SocialTitle>{title}</SocialTitle>
      <SocialMediaContainer>
        <iframe
          title="Instagram"
          src={IgEmbedLink}
          width="400"
          height="480"
          frameBorder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
        <iframe
          title="Facebook"
          src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${facebookPageName}%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=475615013551381`}
          width="340"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </SocialMediaContainer>
    </SocialMediaSectionContainer>
  )
}

export default SocialMedia
