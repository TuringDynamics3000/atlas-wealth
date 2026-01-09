# Adviser Projections

This directory contains **read-only projection models** for the Adviser UX.

## Purpose

These projections provide stable, server-side read models for:

- Adviser work queue
- Client lists and client workspaces
- Advice case snapshots
- Acceptance and override status

The Adviser UI **must only read from projections**.
It must never read domain state or event logs directly.

## Architectural Rules

- Projections are **read-only**
- No mutations are permitted in this layer
- No AuthorityContext checks occur here
- Authority enforcement happens on **write / intent** paths only
- Projections are backed by the event & evidence store in production

## Current State

For now, projections are backed by mock data to support UI development.
They will be replaced with event-store-backed queries without changing the UI.

This boundary is intentional.
