import type { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import { stripe } from "../lib/stripe";
import { config } from "../config";

export const stripeWebhookController = (
  request: Request,
  response: Response
) => {
  let event = request.body;

  if (!config.stripe.secretKey) {
    console.log("STRIPE_WEBHOOK_SECRET_KEY is not set.");
    return response.sendStatus(400);
  }
};
