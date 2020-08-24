import React from 'react';
import { graphql } from "gatsby";
import Layout from '../components/Layout';
import SEO from '../components/seo';
import RecommendedPosts from '../components/RecommendedPosts';
import Comments from '../components/Comments';
import * as S from '../components/Post/post.styled';

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.previousPost
  const previous = pageContext.nextPost

  return (
    <Layout>
      <SEO 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} • {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{__html: post.html}}></div>
      </S.MainContent>
      <RecommendedPosts next={next} previous={previous} />
      <Comments title={post.frontmatter.title} url={post.fields.slug} />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug}}) {
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      fields{
        slug
      }
      html
      timeToRead
    }
  }
`

export default BlogPost
