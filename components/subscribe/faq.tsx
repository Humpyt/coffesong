"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does the subscription work?",
    answer:
      "Choose your preferred coffee and delivery frequency. We'll roast and ship your coffee according to your schedule. You can modify or cancel your subscription at any time.",
  },
  {
    question: "When will my coffee be delivered?",
    answer:
      "Your coffee is roasted to order and shipped within 24 hours of roasting. Delivery typically takes 2-5 business days depending on your location.",
  },
  {
    question: "Can I change my delivery frequency?",
    answer:
      "Yes! You can adjust your delivery frequency, pause, or cancel your subscription at any time through your account settings.",
  },
  {
    question: "What if I want to try different coffees?",
    answer:
      "You can change your coffee selection at any time. We also offer a Roaster's Choice subscription where we'll send you different coffees based on your preferences.",
  },
  {
    question: "Is shipping really free?",
    answer: "Yes, all subscription orders include free shipping, no minimum purchase required.",
  },
  {
    question: "How fresh is the coffee?",
    answer: "We roast all coffee to order and ship within 24 hours of roasting to ensure maximum freshness.",
  },
]

export default function SubscribeFAQ() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B6834] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Have questions about our subscription service? Find answers to common questions below.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

