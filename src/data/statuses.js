import { BookCheck, CircleCheck, Lightbulb, LoaderCircle, Send } from 'lucide-react'

// Research / project status vocabulary (PORTFOLIO_CONTENT.md §5).
// Status is always shown as text + icon, never colour alone. Use only the
// label that is actually true: a proposal is not a publication.
export const STATUSES = {
  interest: { label: 'Research Interest', icon: Lightbulb },
  'in-progress': { label: 'In Progress', icon: LoaderCircle },
  completed: { label: 'Completed Experiment', icon: CircleCheck },
  submitted: { label: 'Submitted', icon: Send },
  published: { label: 'Published', icon: BookCheck },
}
