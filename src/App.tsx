import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ListingsPage } from './pages/ListingsPage';
import { ListingDetailPage } from './pages/ListingDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';

function NotFound(){return <section className="mx-auto max-w-3xl px-5 py-28 text-center"><h1 className="font-display text-6xl text-[#17352C]">That page is not here.</h1><a href="/" className="mt-7 inline-flex bg-[#17352C] px-6 py-3 font-bold text-white">Return home</a></section>}

export default function App(){return <BrowserRouter><Routes><Route element={<Layout/>}><Route index element={<HomePage/>}/><Route path="services" element={<ServicesPage/>}/><Route path="listings" element={<ListingsPage/>}/><Route path="listings/:slug" element={<ListingDetailPage/>}/><Route path="about" element={<AboutPage/>}/><Route path="contact" element={<ContactPage/>}/><Route path="blog" element={<BlogPage/>}/><Route path="blog/:slug" element={<BlogPostPage/>}/><Route path="*" element={<NotFound/>}/></Route></Routes></BrowserRouter>}
