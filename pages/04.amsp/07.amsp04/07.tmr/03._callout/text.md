---
title: Callout
image_align: right
visible: false
---

TMR can be triggered either from an external source, e.g. a user, or by another federate and the pattern include both a pull (acquisition) and push (divestiture) model for responsibility transfer. The pattern combines HLA Ownership Management Services with a set of HLA Interactions used to further negotiate and control the TMR.

The TMR pattern defines five TMR interactions:
* InitiateTransferModellingResponsibility - Triggers a federate to initiate a TMR
* RequestTransferModellingResponsibility - Initiates a push or pull request of TRM
* OfferTransferModellingResponsibility - Response to a TMR Request
* Cancel Request - Abort TMR pattern
* Transfer Result - Notification of TMR result

> _The TMR pattern also include the following HLA Ownership Management Service calls and callbacks (†): Attribute Ownership Acquisition, Attribute Ownership Acquisition If Available, Attribute Ownership Divesture If Wanted, Cancel Attribute Ownership Acquisition, Request Attribute Ownership Release †, Attribute Ownership Acquisition Notification †, Confirm Attribute Ownership Acquisition Cancellation †, Attribute OwnershipUnavailable †_