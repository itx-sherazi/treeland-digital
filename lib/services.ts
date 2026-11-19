import type { IconName } from "@/components/Icon";

export type Service = {
  title: string;
  icon: IconName;
  description: string;
  value: string;
};

export type ServiceGroup = {
  id: string;
  label: string;
  title: string;
  blurb: string;
  services: Service[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    id: "build",
    label: "01 — Build",
    title: "Websites & Online Stores",
    blurb: "Fast, beautiful websites that become your strongest sales channel.",
    services: [
      {
        title: "Web Development",
        icon: "code",
        description:
          "Modern, fast, responsive, and scalable websites built to help businesses establish and grow their online presence.",
        value: "A site that loads fast and turns visitors into enquiries.",
      },
      {
        title: "WordPress Development",
        icon: "wordpress",
        description:
          "Custom WordPress websites, business websites, landing pages, CMS solutions, and WordPress customization.",
        value: "Update your own content without calling a developer.",
      },
      {
        title: "E-commerce Development",
        icon: "cart",
        description:
          "Scalable e-commerce solutions for businesses looking to sell products online and grow their digital sales.",
        value: "A smooth checkout that sells around the clock.",
      },
      {
        title: "Website Maintenance & Support",
        icon: "wrench",
        description:
          "Ongoing website updates, performance optimization, security improvements, technical support, and maintenance.",
        value: "Your site stays secure, fast and up to date.",
      },
    ],
  },
  {
    id: "software",
    label: "02 — Engineer",
    title: "Software, Apps & Platforms",
    blurb: "Custom systems shaped around how your business actually works.",
    services: [
      {
        title: "Custom Software Development",
        icon: "software",
        description:
          "Custom software solutions designed around business requirements, workflows, and operational needs.",
        value: "Replace spreadsheets and manual work with one system.",
      },
      {
        title: "CRM Development",
        icon: "crm",
        description:
          "Custom CRM systems that help businesses manage customers, sales, leads, operations, and relationships.",
        value: "See every lead and customer in one place.",
      },
      {
        title: "Mobile App Development",
        icon: "mobile",
        description: "Modern mobile applications designed for performance, usability, and scalability.",
        value: "Reach customers right in their pocket, on iOS and Android.",
      },
      {
        title: "SaaS Development",
        icon: "cloud",
        description:
          "Building scalable SaaS platforms, web applications, subscription-based products, and business tools.",
        value: "Launch a product that grows with recurring revenue.",
      },
    ],
  },
  {
    id: "grow",
    label: "03 — Grow",
    title: "Visibility & Marketing",
    blurb: "Get found by the right people and turn attention into leads.",
    services: [
      {
        title: "SEO Services",
        icon: "seo",
        description:
          "Search engine optimization strategies focused on organic visibility, technical SEO, content optimization, and sustainable growth.",
        value: "Rank for the searches your customers already make.",
      },
      {
        title: "Digital Marketing",
        icon: "megaphone",
        description:
          "Digital marketing strategies to help brands reach their target audience, increase visibility, and generate leads.",
        value: "Campaigns measured by leads, not just likes.",
      },
    ],
  },
  {
    id: "innovate",
    label: "04 — Innovate",
    title: "Design & Intelligence",
    blurb: "Experiences people enjoy, and automation that saves hours every week.",
    services: [
      {
        title: "UI/UX Design",
        icon: "design",
        description:
          "Beautiful, intuitive, and user-focused interfaces designed to create better digital experiences.",
        value: "Interfaces people understand at first glance.",
      },
      {
        title: "AI & Automation",
        icon: "ai",
        description:
          "AI-powered solutions, workflow automation, intelligent integrations, and business process automation.",
        value: "Let software handle the repetitive work.",
      },
    ],
  },
];

export const allServices = serviceGroups.flatMap((g) => g.services.map((s) => s.title));
