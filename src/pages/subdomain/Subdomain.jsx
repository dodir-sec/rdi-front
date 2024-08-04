import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Subdomain() {

  const initialData = {
    id: "sub1",
    url: "sub.example.com",
    code: 200,
    title: "Subdomain 1",
    severity: "Info",
    img: "",
    isFavorite: false,
    isChecked: false,
    score: 0,
    contentLength: 0,
    contentType: "HTML",
    ips: [],
    techStack: ["React", "Node.js"],
    ports: [],
    dirs: [],
    params: [],
    waf: "Cloudfare"
  }

  return (
    <div>
      <Breadcrumbs title={initialData.url} />
    </div>
  )
}
