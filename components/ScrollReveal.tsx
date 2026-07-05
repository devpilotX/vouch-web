"use client"

// Fades sections in as they scroll into view. Pure polish, page works fine without it.
import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"))
    // if the browser is old, just show everything and move on
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in")
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
