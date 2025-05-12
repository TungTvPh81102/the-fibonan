import { z } from 'zod'

export const ctaSchema = z.object({
  name: z.string().min(1, 'Vui lòng nhập họ tên'),
  email: z.string().email('Email không hợp lệ'),
  phone: z.string().min(9, 'Số điện thoại không hợp lệ'),
  apartment: z.string().min(1, 'Vui lòng chọn căn hộ'),
  message: z.string().optional(),
})

export type CtaPayload = z.infer<typeof ctaSchema>
