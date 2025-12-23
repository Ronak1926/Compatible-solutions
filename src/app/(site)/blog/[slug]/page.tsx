import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import { getPostBySlug } from '@/utils/markdown'
import { format } from 'date-fns'

interface BlogPageProps {
  params: {
    slug: string
  }
}

// Ensure this route is fully static for `output: export`
export const dynamicParams = false

export async function generateStaticParams() {
  // Explicit list of slugs we want to export
  return [
    // New industry-focused posts
    { slug: 'fintech-growth-2025' },
    { slug: 'healthcare-digital-care' },
    { slug: 'ecommerce-performance' },
    { slug: 'edtech-experience' },
    { slug: 'saas-product-foundations' },
    { slug: 'proptech-digital-twins' },
    // Existing sample posts
    { slug: 'Blog_1' },
    { slug: 'Blog_2' },
    { slug: 'Blog_3' },
    { slug: 'Blog_4' },
    { slug: 'Blog_5' },
    { slug: 'Blog_6' },
    { slug: 'Blog_7' },
    { slug: 'Blog_8' },
    { slug: 'Blog_9' },
  ]
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug, ['title', 'excerpt']) as any

  return {
    title: post?.title ? `${post.title} | Blog` : 'Blog',
    description: post?.excerpt || 'Blog article',
  }
}

import { markdownToHtml } from '@/utils/markdown'

const BlogDetailPage = async ({ params }: BlogPageProps) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'coverImage', 'content']) as any

  if (!post) {
    return null
  }

  const content = await markdownToHtml(post.content || '')

  return (
    <section className='pt-24 pb-20 dark:bg-darkmode bg-white'>
      <div className='mx-auto max-w-4xl px-4'>
        {/* Hero image (if present) */}
        {post.coverImage && (
          <div className='mb-8 overflow-hidden rounded-2xl border border-border dark:border-dark_border'>
            <Image
              src={post.coverImage as string}
              alt={post.title}
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto' }}
              className='w-full object-cover'
            />
          </div>
        )}

        {/* Meta + title */}
        <p className='text-sm font-medium text-grey dark:text-white/60 mb-2'>
          {(() => {
            try {
              return format(post.date ? new Date(post.date) : new Date(), 'dd MMM yyyy')
            } catch (e) {
              return format(new Date(), 'dd MMM yyyy')
            }
          })()}
        </p>
        <h1 className='text-3xl md:text-4xl font-bold text-midnight_text dark:text-white mb-6'>
          {post.title}
        </h1>

        {/* Content */}
        <article
          className='prose prose-lg md:prose-xl max-w-none dark:prose-invert 
          prose-headings:text-midnight_text dark:prose-headings:text-white 
          prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-headings:mb-6 prose-headings:mt-12
          prose-a:text-primary hover:prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
          prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10
          prose-p:text-grey dark:prose-p:text-gray-300 prose-p:leading-8 prose-p:mb-8
          prose-li:text-grey dark:prose-li:text-gray-300 prose-li:my-2
          prose-ul:my-8 prose-ol:my-8
          prose-strong:text-midnight_text dark:prose-strong:text-white prose-strong:font-semibold
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:py-2 prose-blockquote:my-10 prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:text-midnight_text dark:prose-blockquote:text-white
          prose-code:text-primary prose-code:bg-blue-50 dark:prose-code:bg-blue-900/20 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
          prose-hr:border-transparent prose-hr:my-16
          [&>p]:mb-8 [&>p]:leading-8
          [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-8
          [&>ol]:list-decimal [&>ol]:ml-6 [&>ol]:mb-8
          [&>li]:mb-2'
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  )
}

export default BlogDetailPage
